import './App.css'
import './Box.css'
import Box from './Box'
import { useState } from 'react'


function App() {
const [counter, setCounter] = useState(0)
const [persons, setPersons] = useState([
  {id: 1, name: 'Nargis', title: 'student', location: 'Helsinki'},
  {id: 2, name: 'John Doe', title: 'developer', location: 'somewhere'},
  {id: 3, name: 'Someone', title: 'designer', location: 'somewhere'}

])

const clickHandler = () =>{
console.log('I am clicked');
setCounter(counter+ 1);
}
const deacreaser = () =>{
  setCounter(counter - 1)
}
const zero = () =>{
  setCounter(counter * 0)
}

return (
  <>
  <p>counter: {counter}</p>
  <button onClick={clickHandler}>+</button>
  <button onClick={deacreaser}>-</button>
  <button onClick={zero}>0</button>
  {persons.map((person) => (
  <Box 
    key={person.name}
    name={person.name}
    title= {person.title}
    location={person.location}
  />
  ))}
  </>
  );
}

export default App
