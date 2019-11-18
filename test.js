import test from 'ava'
import { Disposable, DisposableCollection, DisposableEvent } from './dist'

test("Disposable's disposal action gets executed exactly once when the disposable is disposed", t => {

  let n = 0  
  const fn = () => n++
  const disposable = new Disposable(fn)
  t.true(Disposable.isDisposable(disposable))

  t.is(typeof disposable.disposalAction, 'function')
  disposable.dispose()
  t.is(disposable.disposalAction, null)

  // derp
  disposable.dispose()
  disposable.dispose()
  disposable.dispose()
  disposable.dispose()
  disposable.dispose()
  disposable.dispose()

  t.is(n, 1)
})

test("DisposableCollection's Disposables' disposal actions get executed when the disposable colection is disposed", t => {

  let n = 0
  const fn = () => n++

  const disposable1 = new Disposable(fn)
  const disposable2 = new Disposable(fn)
  const disposable3 = new Disposable(fn)
  const collection  = new DisposableCollection(disposable1, disposable2)

  t.true(Disposable.isDisposable(collection))
  t.is(collection.disposables.length, 2)

  collection.add(disposable3)
  t.is(collection.disposables.length, 3)
  t.false(collection.disposed)

  collection.dispose()
  t.true(collection.disposed)

  // derp vol 2
  collection.dispose()
  collection.dispose()
  collection.dispose()
  collection.dispose()
  collection.dispose()
  collection.dispose()

  t.is(n, 3)
})

test("DisposableEvent", t => {

  let n = 0
  const fn = () => n++
  let disposable = null

  const create = (args) =>
    disposable = new DisposableEvent(args)

  t.throws(() => create())
  t.throws(() => create({ handler: fn }))
  t.notThrows(() => create({ handler: fn, type: 'click' }))

  t.true(Disposable.isDisposable(disposable))

  t.false(disposable.disposed)
  disposable.dispose()
  t.true(disposable.disposed)

})
