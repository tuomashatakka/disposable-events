import Disposable from './Disposable'


export default class DisposableEvent extends Disposable {

  constructor ({ type, handler, target }) {

    const missingArgumentError = (pre, name) => `${pre} the listened event must be provided for the DisposableEvent by passing a \`${name}\` property upon calling its constructor`
    const missingTypeError = missingArgumentError("The type of", "type")
    const missingHandlerError = missingArgumentError("The handler for", "handler")

    const bind = () =>
      !this.disposed ?
      this.target.addEventListener(this.type, this.handler) :
      null

    const unbind = () =>
      this.target.removeEventListener(this.type, this.handler)

    super(unbind)

    if (!handler)
      throw new Error(missingHandlerError)

    if (!type)
      throw new Error(missingTypeError)

    if (!target)
      target = document

    this.type    = type || 'click'
    this.target  = target
    this.handler = (e) => handler.call(target, e)

    bind()

  }

}
