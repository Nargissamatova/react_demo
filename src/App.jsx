import './App.css'
import './Box.css'
import Box from './Box'
import { useState } from 'react'


function App() {
const [counter, setCounter] = useState('hi')

  return (
    <>
  
    <p>counter: {counter}</p>
    <Box name='Nargis' title='student' location='Helsinki' />
    <Box name='Blabla' title='someone' location='Helsinki' />
    <Box name='Someone' title='student' location='somewhere' />
    </>
  )
}

export default App
