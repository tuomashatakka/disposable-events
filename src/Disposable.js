
export default class Disposable {


  // Public: Ensure that an `object` correctly implements the `Disposable`
  // contract.
  // * `object` Any object you want to perform the check against.
  // Returns a {Boolean} indicating whether `object` is a valid `Disposable`.
  static isDisposable (object) {
    return isDisposable(object)
  }

  // Public: Construct a Disposable
  // * `disposalAction` An action to perform when {::dispose} is called for the
  //   first time.
  constructor (disposalAction) {
    this.disposed = false
    this.disposalAction = disposalAction.bind(this)
  }

  // Public: Perform the disposal action, indicating that the resource associated
  // with this disposable is no longer needed.
  //
  // You can call this method more than once, but the disposal action will only
  // be performed the first time.
  dispose () {
    if (!this.disposed) {
      this.disposed = true
      if (this.disposalAction)
        this.disposalAction()
      this.disposalAction = null
    }
    return
  }
}

export function isDisposable (object) {
  return object && typeof object.dispose === "function"
}
