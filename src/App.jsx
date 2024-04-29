import "./App.css";
import "./Box.css";

//import Box from "./Box";
import Header from "./Header";
import Footer from "./Footer";
//import Counter from "./Counter";
import Form from "./Form";
import View from "./View";

import { useState } from "react";

function App() {
  /*
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: "Nargis", title: "student", location: "Helsinki" },
    { id: 2, name: "John Doe", title: "developer", location: "somewhere" },
    { id: 3, name: "Someone", title: "designer", location: "somewhere" },
  ]); */
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const changeAllHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value })); //it will overwrite the object
    // also prevState is not built-in, it was named, ...prevstate - open object
    // [name] : value -> comparison, check and get value

    console.log(formData);
  };
  /*
  const clickHandler = () => {
    setCounter(counter + 1);
  };
  const deacreaser = () => {
    setCounter(counter - 1);
  };
  const zero = () => {
    setCounter(counter * 0);
  };*/

  return (
    <>
      <Header />
      <input />
      <p>Text will be here: {inputValue}</p>

      {/*
      <Counter
        counterP={counter}
        clickHandler={clickHandler}
        deacreaser={deacreaser}
        zero={zero}
      />
      {persons.map((person) => (
        <Box
          key={person.name}
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))}
      */}

      <Form changeHandler={changeAllHandler} />
      <View {...formData} />
      <Footer />
    </>
  );
}

export default App;
