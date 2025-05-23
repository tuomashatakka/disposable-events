import Disposable, { isDisposable } from './Disposable'

const notDisposableError = `Parameters to DisposableCollection.add should have a dispose method`


export default class DisposableCollection {
  disposables: Disposable[]
  disposed: boolean

  /**
   * Construct an instance of `DisposableCollection`
   *
   * @method constructor
   */

  constructor (...args: Disposable[]) {
    this.disposables = []
    this.disposed    = false
    this.add(...args)
  }

  /**
   * Append any number of disposable objects to the collection
   *
   * @method add
   * @param  {Array} disposables Any number of objects with a disposal action
   */

  add (...disposables: Disposable[]) {
    if (this.disposed)
      return
    disposables.forEach(disposable => {
      if (!isDisposable(disposable))
        throw new Error(notDisposableError)
      this.disposables.push(disposable)
    })
  }

  /**
   * Remove disposables from the collection
   *
   * @method remove
   * @param  {[type]} disposables Any number of disposables that are added
   *                              to this collection
   */


  remove (...disposables: Disposable[]) {
    if (this.disposed)
      return

    disposables.forEach(disposable => {
      let id = this.disposables.findIndex(iter => iter == disposable)
      if (id > -1) this.disposables.splice(id, 1)
    })
  }

  /**
   * Clear the collection from any disposables without firing their
   * disposal actions
   *
   * @method clear
   */

  clear () {
    if (!this.disposed)
      this.disposables = []
  }

  /**
   * Dispose the collection along with all its registered disposables
   * @method dispose
   * @return {[type]} [description]
   */

  dispose () {
    if (this.disposed)
      return

    this.disposed = true
    this.disposables.forEach(disposable => disposable.dispose())
    this.disposables = []
  }
}
