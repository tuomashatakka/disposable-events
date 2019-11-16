# disposable-events

## What does it do

> Disposables are convenient ways to represent a resource you will no longer need at some point. You can instantiate a disposable with an action to take when no longer needed.

Inspired by the atom's [event-kit](https://github.com/atom/event-kit)

## How do you use it

Coming soon™️

## DisposableCollection

You can use DisposableCollection to combine disposable instances together.

```js
const { Disposable, DisposableCollection } = require('disposable-events')

const subscriptions = new DisposableCollection()
subscriptions.add(
  new Disposable(() => alert('asd')),
  new Disposable(() => alert('basd'))
)

// Later, to unsubscribe from *both*...
subscriptions.dispose()
```
