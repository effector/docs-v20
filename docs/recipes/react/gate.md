---
id: gate
title: Gate - a bridge between props and store
---

Imagine you have the task of transferring something from react props to the effector store.
Suppose you pass the history object from the react-router to the store, or pass some callbacks from render-props.
In a such situation [`Gate`](https://effector.now.sh/en/api/effector-react/gate) will help.

In this example we will write code which will not go beyond our sandbox

```js try
import {createStore, createEffect, forward} from 'effector'
import {useStore, createGate} from 'effector-react'

// Effect for api request
const getTodoFx = createEffect({
  async handler({id}) {
    const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return req.json()
  },
})

// Our main store
const $todo = createStore(null).on(getTodoFx.doneData, (_, result) => result)

const TodoGate = createGate('gate with props')

// We callgetTodoFx effect every time Gate updates its state.
forward({from: TodoGate.state, to: getTodoFx})

TodoGate.open.watch(() => {
  //called each time when TodoGate is mounted
})
TodoGate.close.watch(() => {
  //called each time when TodoGate is unmounted
})

function Todo() {
  const todo = useStore($todo)
  const loading = useStore(getTodoFx.pending)
  if (loading) {
    return <div>Loading...</div>
  }

  if (Object.keys(todo).length === 0) {
    return <div>empty</div>
  }
  return (
    <div>
      <p>title: {todo.title}</p>
      <p>id: {todo.id}</p>
    </div>
  )
}

// Something that's not easy to get out of react
function ComponentWithRenderProp({children}) {
  return children(React.useState(0))
}

function App() {
  return (
    <ComponentWithRenderProp>
      {([id, setId]) => (
        <>
          <button onClick={() => setId(id + 1)}>Get next Todo</button>
          {/*In this situation, we have the ability to simultaneously
          render a component and make a request, rather than wait for the component*/}
          <TodoGate id={id} />
          <Todo />
        </>
      )}
    </ComponentWithRenderProp>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```
