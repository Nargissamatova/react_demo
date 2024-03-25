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

return (
  <>
  <p>counter: {counter}</p>
  <button onClick={clickHandler}>Click me</button>

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
