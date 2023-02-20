---
id: useStore
title: useStore
hide_title: true
---

# `useStore(store)`

Creates a hook function, which subscribes to watcher, that observes changes in the current store, so when recording results, the component will update automatically.

#### Arguments

1. `store` (_Store_)

#### Returns

(_State_)

#### Example

```js try
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, createApi} from 'effector'
import {useStore} from 'effector-react'

const counter = createStore(0)

const {increment, decrement} = createApi(counter, {
  increment: state => state + 1,
  decrement: state => state - 1,
})

const Counter = () => {
  const state = useStore(counter)
  return (
    <div>
      {state}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
```

[Try it](https://share.effector.dev/4aFc0s3d)
