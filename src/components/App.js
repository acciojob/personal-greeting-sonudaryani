
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [greet, setGreet] = useState("")
  const handleChange = (event) => setGreet("Hello "+event.target.value+"!")
  return (
    <div>
        <label>Enter your name:</label><br></br>
        <input
         id="name"
         onChange={handleChange} />
        <p>{greet}</p>
    </div>
  )
}

export default App
