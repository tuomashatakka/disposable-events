
export default class Disposable {
  disposed: boolean = false
  disposalAction: CallableFunction | null

  /**
   * Ensure that an `object` correctly implements the `Disposable` contract
   *
   * @method isDisposable
   * @param  {Object}     object Any object you want to perform the check against
   * @return {Boolean}    Boolean indicating whether `object` is a valid `Disposable`
   */

  static isDisposable (object: Disposable | unknown) {
    return isDisposable(object)
  }

  /**
   * Construct a Disposable
   *
   * @method constructor
   * @param  {Function}    disposalAction An action to perform when {::dispose} is called for the first time
   */

  constructor (disposalAction: CallableFunction) {
    this.disposalAction = disposalAction.bind(this)
  }

  /**
   * Perform the disposal action, indicating that the resource
   * associated with this disposable is no longer needed. You
   * can call this method more than once, but the disposal action
   * will only be performed the first time
   *
   * @method dispose
   */

  dispose () {
    if (this.disposed)
      return

    this.disposed = true
    if (this.disposalAction)
      this.disposalAction()
    this.disposalAction = null
  }
}

/**
 * Ensure that an `object` correctly implements the `Disposable` contract
 *
 * @method isDisposable
 * @param  {[type]}     object object Any object you want to perform the check against
 * @return {Boolean}    Boolean indicating whether `object` is a valid `Disposable`
 */

export function isDisposable (object: any) {
  return object && typeof object.dispose === "function"
}

// export function isDisposable (disposable) {
//   const ALLOWED_TYPES = [Disposable, DisposableEvent]
//   return (
//     ALLOWED_TYPES.indexOf(disposable.constructor) > -1 ||
//     Disposable.isDisposable(disposable))
// }
