import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './src/containers/mainContainer'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './general.sass'

const App = (props) => (
  <div>
  <MainContainer />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)