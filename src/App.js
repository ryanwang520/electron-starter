import { hot } from 'react-hot-loader'

import React from 'react'
import Counter from './Counter'

const App = () => (
  <div className="App">
    <div>hello parcl</div>
    <div>hot reload</div>
    <div>hot reload</div>
    <Counter />
  </div>
)

export default App
// export default hot(module)(App)
