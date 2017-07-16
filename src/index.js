
import Disposable from './Disposable'
import DisposableEvent from './DisposableEvent'
import DisposableCollection from './DisposableCollection'
// import patchers from './patch'

// function bind (...handlers) {
//   console.log(handlers)
// }
//
// function unbind (...handlers) {
//   handlers.forEach()
// }
//
// class Event {
//
//   constructor (listener, ...handlers) {
//     this.disposed = false
//     this.handlers = handlers
//     this.listener = bind.call(listener)
//   }
//
//   dispose () {
//     this.disposed = true
//     unbind.call(this.listener, ...this.handlers)
//   }
//
//   attach (listener) {
//     this.listener = bind.call(listener)
//   }
// }

export function Event () {
  return new DisposableEvent(...arguments)
}

export function Instance () {
  return new Disposable(...arguments)
}

export function Collection () {
  return new DisposableCollection(...arguments)
}
//
// const exports = {
//   Disposable,
//   DisposableEvent,
// }
// Object.assign(window, exports)
// export { exports }
