import test from 'ava'
import { plus200 } from '../index.js'

test('sync function from native code', (t) => {
  const fixture = 42
  t.is(plus200(fixture), fixture + 200)
})
