import Link from 'next/link'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Counter, reducer } from '~/counter'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(reducer, composeWithDevTools())

export default () =>
  <Provider store={store}>
    <div>
      <h1>Hello Counter!</h1>
      <Counter />
      <Link href="/">Home</Link>
    </div>
  </Provider>
