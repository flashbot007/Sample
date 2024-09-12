import { useState } from 'react'
import './App.css'
import Sections from './Components/Sections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sections/>
    </>
  )
}

export default App
