
import Disposable from './Disposable'
import DisposableEvent from './DisposableEvent'
import DisposableCollection from './DisposableCollection'

export {
  Disposable,
  DisposableCollection,
  DisposableEvent,
}

export function Event () {
  return new DisposableEvent(...arguments)
}

export function Instance () {
  return new Disposable(...arguments)
}

export function Collection () {
  return new DisposableCollection(...arguments)
}

export default {
  Event, 
  Instance, 
  Collection,
}
