import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App.jsx'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if(module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App)
  })
}
