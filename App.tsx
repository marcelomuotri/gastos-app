import React from 'react'
import { Provider } from 'react-redux'
import store from './src/state/store'
import Navigation from './src/Navigation'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
