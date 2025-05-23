import Disposable from './Disposable'
import { EventEmitter } from "events"

const missingArgumentError = (pre: string, name: string) => `${pre} the listened event must be provided for the DisposableEvent by passing a \`${name}\` property upon calling its constructor`
const missingTypeError = missingArgumentError("The type of", "type")
const missingHandlerError = missingArgumentError("The handler for", "handler")


export default class DisposableEvent extends Disposable {
  handler: EventListener | null
  target: HTMLElement | null
  type: string = ''

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
   */

  constructor ({ type, handler, target }: { type: string, handler: EventListener, target: HTMLElement }) {

    const bind = () =>
      !this.disposed ?
      this.target && typeof this.target.addEventListener === 'function' && this.target.addEventListener(this.type, this.handler as EventListener) :
      null

    const unbind = () => {
      if (!this.target || (typeof this.target.removeEventListener !== 'function'))
       return
      this.target.removeEventListener(this.type, this.handler as EventListener)
      this.target = null
      this.handler = null
    }


    if (!handler)
      throw new Error(missingHandlerError)

    if (!type)
      throw new Error(missingTypeError)

    const destination = target || getDefaultTarget() as unknown as HTMLElement

    super(unbind)

    this.type    = type || 'click'
    this.target  = destination
    this.handler = (e: Event) => handler.call(target, e)

    bind()

  }

}

const emitter = new EventEmitter()


function getDefaultTarget () {
  if (typeof document !== 'undefined')
    return document

  return {
    addEventListener:    emitter.addListener,
    removeEventListener: emitter.removeListener,
  }
}