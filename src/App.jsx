import React from 'react'

import Call from './components/Call/Call'
import Class from './components/Class/Class'
import Home from './components/Home/Home'
import Info from './components/Info/Info'

import "./components/styles/index.scss"

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Info />
      <Call />
      <Class />
    </div>
  )
}

export default App