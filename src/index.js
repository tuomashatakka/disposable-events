
import Disposable from './Disposable'
import DisposableEvent from './DisposableEvent'
import DisposableCollection from './DisposableCollection'

export function Event () {
  return new DisposableEvent(...arguments)
}

export function Instance () {
  return new Disposable(...arguments)
}

export function Collection () {
  return new DisposableCollection(...arguments)
}

export default module.exports
