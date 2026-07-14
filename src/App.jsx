import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Addrecord from './components/Addrecord'
import './App.css'
import Viewall from './components/Viewall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addrecord />
      <Viewall />
    </>
  )
}

export default App
