import { useState } from 'react'
import './App.css'
import Box from './Box'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hi</h1>
    <Box/>
    <Box/>
    <Box/>

    </>
  )
}

export default App
