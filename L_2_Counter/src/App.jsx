import { useState } from "react";
import "./App.css";

function App() {
  {
    /**  Here counter is like a variable and setCounter is a method which
        Update the value of the counter  
    **/
  }
  
  const [counter, setCounter] = useState(0);

  let addValue = () => {
    setCounter(counter + 1);
  };

  let removerValue = () => {
    setCounter(counter - 1);
    if (counter < 1) {
      setCounter(0);
      return;
    }
  };

  return (
    <>
      <h1> COUNTER APP</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addValue}> Increment</button>
      <br />
      <br />
      <button onClick={removerValue}> Decrement</button>
      <input type="checkbox" name="2X" id="some" />
    </>
  );
}

export default App;

