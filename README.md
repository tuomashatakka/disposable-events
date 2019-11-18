# disposable-events

![Build status](https://img.shields.io/travis/com/tuomashatakka/disposable-events?style=for-the-badge)
![Maintainability](https://img.shields.io/codeclimate/maintainability/tuomashatakka/disposable-events?style=for-the-badge)
![Coverage](https://img.shields.io/codeclimate/coverage/tuomashatakka/disposable-events?style=for-the-badge)
![Issues](https://img.shields.io/github/issues-raw/tuomashatakka/disposable-events?color=%2380afc0&style=for-the-badge)
![Repo size](https://img.shields.io/github/languages/code-size/tuomashatakka/disposable-events?color=%2300aaaa&style=for-the-badge)

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
