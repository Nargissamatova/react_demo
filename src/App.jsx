import "./App.css";
import "./Box.css";

import Box from "./Box";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: "Nargis", title: "student", location: "Helsinki" },
    { id: 2, name: "John Doe", title: "developer", location: "somewhere" },
    { id: 3, name: "Someone", title: "designer", location: "somewhere" },
  ]);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  const deacreaser = () => {
    setCounter(counter - 1);
  };
  const zero = () => {
    setCounter(counter * 0);
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
