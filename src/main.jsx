import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApp } from './PokemonApp'

import "./index.css"
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PokemonApp />
  </Provider>
)
