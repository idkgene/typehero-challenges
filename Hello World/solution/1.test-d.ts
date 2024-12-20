import type { Equal, Expect, NotAny } from '@type-challenges/utils'
import { HelloWorld } from './1.ts'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
