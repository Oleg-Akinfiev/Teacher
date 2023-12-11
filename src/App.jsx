import Call from './components/Call/Call'
import Home from './components/Home/Home'
import Info from './components/Info/Info'

import "./components/styles/index.scss"

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Info />
      <Call />
    </div>
  )
}

export default App