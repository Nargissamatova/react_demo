import "./App.css";
import "./Box.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: "Nargis", title: "student", location: "Helsinki" },
    { id: 2, name: "John Doe", title: "developer", location: "somewhere" },
    { id: 3, name: "Someone", title: "designer", location: "somewhere" },
  ]);
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

  return (
    <>
      <Header />
      <input />
      <p>Text will be here: {inputValue}</p>

      <Form changeHandler={changeAllHandler} />
      <View {...formData} />
      <Footer />
    </>
  );
}
*/

/*
  // const [formData, setFormData] = useState({});
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const displayHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

 <Header />
      {isLoggedIn && <Dashboard user="Nargis" />}
      <button onClick={displayHandler}>Click me</button>
      <Footer />

*/
