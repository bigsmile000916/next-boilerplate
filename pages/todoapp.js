import Link from 'next/link'
import { Provider } from 'react-redux'
import { Counter } from '~/todoapp'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Todo App</h1>
      <Counter />
      <Link href="/"><a>Home</a></Link>
      <Link href="/counter"><a>Counter</a></Link>
    </div>
  </Provider>
