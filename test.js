import test from 'ava'
import { Disposable } from './dist'

test("Disposable's disposal action gets executed when the disposable is disposed", t => {

  let n = 0  
  const fn = () => n++
  const disposable = new Disposable(fn)
  t.true(Disposable.isDisposable(disposable))

  disposable.dispose()
  t.is(disposable.disposalAction, null)

})