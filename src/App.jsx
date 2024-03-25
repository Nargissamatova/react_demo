import { useState } from 'react'
import './App.css'
import './Box.css'
import Box from './Box'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box name='Nargis' title='student' location='Helsinki' />
    <Box name='Blabla' title='someone' location='Helsinki' />
    <Box name='Someone' title='student' location='somewhere' />
    </>
  )
}

export default App
