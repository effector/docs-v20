---
id: createEffect
title: createEffect
hide_title: true
---

# `createEffect(name?, { handler })`

Creates an [effect](Effect.md)

#### Arguments

1. `name`? (_string_): Effect name
2. `params`? (_Params_): Setup effect
   - `handler` (_Function_): function to handle effect calls, also can be set with [`use(handler)`](#use)

#### Returns

[_Effect_](Effect.md): New effect

> **Note**: You must provide a handler either through `handler` property in [createEffect](createEffect.md) or [`.use`](Effect.md#usehandler) method later, otherwise the error "no handler used in _%effect name%_" will appear in the console

> **Note**: You are not supposed to [`Forward`](forward.md) to parts of _Effect_ (even though it consists of _Events_ and _Stores_), since it's a complete entity on its own. This behavior will not be supported

#### Examples

Create unnamed effect

```js try
import {createEffect} from 'effector'

const fetchUserReposFx = createEffect({
  handler: async ({name}) => {
    const url = `https://api.github.com/users/${name}/repos`
    const req = await fetch(url)
    return req.json()
  },
})

await fetchUserReposFx({name: 'zerobias'})
```

[Try it](https://share.effector.dev/6pNaXVyU)

Create named effect

```js try
import {createEffect} from 'effector'

const fetchUserReposFx = createEffect('fetch user repositories', {
  handler: async ({name}) => {
    const url = `https://api.github.com/users/${name}/repos`
    const req = await fetch(url)
    return req.json()
  },
})

await fetchUserReposFx({name: 'zerobias'})
```

[Try it](https://share.effector.dev/8oirbvPY)

Set handler to effect after creating

```js try
import {createEffect} from 'effector'

const fetchUserReposFx = createEffect()

fetchUserReposFx.use(async ({name}) => {
  const url = `https://api.github.com/users/${name}/repos`
  const req = await fetch(url)
  return req.json()
})

await fetchUserReposFx({name: 'zerobias'})
```

[Try it](https://share.effector.dev/e1QPH9Uq)

Watch effect status

```js try
import {createEffect} from 'effector'

const fetchUserReposFx = createEffect({
  handler: async ({name}) => {
    const url = `https://api.github.com/users/${name}/repos`
    const req = await fetch(url)
    return req.json()
  },
})

fetchUserReposFx.pending.watch(pending => {
  console.log(`effect is pending?: ${pending ? 'yes' : 'no'}`)
})

fetchUserReposFx.done.watch(({params, result}) => {
  console.log(params) // {name: 'zerobias'}
  console.log(result) // resolved value
})

fetchUserReposFx.fail.watch(({params, error}) => {
  console.error(params) // {name: 'zerobias'}
  console.error(error) // rejected value
})

fetchUserReposFx.finally.watch(({params, status, result, error}) => {
  console.log(params) // {name: 'zerobias'}
  console.log(`handler status: ${status}`)

  if (error) {
    console.log('handler rejected', error)
  } else {
    console.log('handler resolved', result)
  }
})

await fetchUserReposFx({name: 'zerobias'})
```

[Try it](https://share.effector.dev/f3JDMpAB)

Change state

```js try
import {createStore, createEffect} from 'effector'

const fetchUserReposFx = createEffect({
  handler: async ({name}) => {
    const url = `https://api.github.com/users/${name}/repos`
    const req = await fetch(url)
    return req.json()
  },
})

const repos = createStore([]).on(fetchUserReposFx.doneData, (_, repos) => repos)

await fetchUserReposFx({name: 'zerobias'})
```

[Try it](https://share.effector.dev/wxUCfzN5)
