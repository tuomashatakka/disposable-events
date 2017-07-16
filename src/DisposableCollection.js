

import { isDisposable } from './Disposable'

// export function isDisposable (disposable) {
//   const ALLOWED_TYPES = [Disposable, DisposableEvent]
//   return (
//     ALLOWED_TYPES.indexOf(disposable.constructor) > -1 ||
//     Disposable.isDisposable(disposable))
// }

export default class DisposableCollection {

  constructor () {
    this.disposed = false
    this.disposables = []
    this.add(...arguments)
  }

  add () {
    if (!this.disposed)
      [...arguments].forEach(disposable =>
        isDisposable(disposable) ?
        this.disposables.push(disposable)
        : new Error("Parameters to DisposableCollection.add should have a dispose method")
      )
  }

  remove () {
    if (!this.disposed)
      [...arguments].forEach(disposable => {
        let id = this.disposables.findIndex(iter => iter == disposable)
        if (id > -1)
          this.disposables.splice(id, 1)
      })
  }

  clear () {
    if (!this.disposed)
      this.disposables = []
  }

  dispose () {
    if (!this.disposed) {
      this.disposed = true
      this.disposables.forEach(disposable =>
        disposable.dispose())
      this.disposables = null
    }
  }

}
