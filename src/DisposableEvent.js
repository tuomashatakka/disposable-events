import Disposable from './Disposable'
import Emitter from "events"

const missingArgumentError = (pre, name) => `${pre} the listened event must be provided for the DisposableEvent by passing a \`${name}\` property upon calling its constructor`
const missingTypeError = missingArgumentError("The type of", "type")
const missingHandlerError = missingArgumentError("The handler for", "handler")


export default class DisposableEvent extends Disposable {

  /**
   * Initiate a new disposable.
   *
   * Upon initiating the new object, a new handler fired on `type` events 
   * will be registered for the element defined by the `target` parameter
   * (efaults to `document`).
   *
   * The event handler will be unbound upon the disposal of this object
   *
   * @method constructor
   * @param  {String}    type    Name of the event for which the handler will be registered
   * @param  {Function}  handler Event listener callback function
   * @param  {Element}   target  Target DOM element
   */

  constructor ({ type, handler, target }) {

    const bind = () =>
      !this.disposed ?
      this.target.addEventListener(this.type, this.handler) :
      null

    const unbind = () => {
      this.target.removeEventListener(this.type, this.handler)
      this.target = null
      this.handler = null
    }

    if (!handler)
      throw new Error(missingHandlerError)

    if (!type)
      throw new Error(missingTypeError)

    if (!target)
      target = getDefaultTarget()

    super(unbind)

    this.type    = type || 'click'
    this.target  = target
    this.handler = (e) => handler.call(target, e)

    bind()

  }

}

const emitter = typeof document === 'undefined' && new Emitter()


function getDefaultTarget () {
  if (typeof document !== 'undefined')
    return document

  return {
    addEventListener:    emitter.addListener,
    removeEventListener: emitter.removeListener,
  }
}