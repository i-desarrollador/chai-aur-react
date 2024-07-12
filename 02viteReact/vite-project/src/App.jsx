import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); //serCounter isnt a keyword, u can use anything
  // let counter=0;
  function addValue() {
    // counter++;
    if(counter>=20){
      counter=20

      setCounter(counter)
    }
    else{
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)

    }
  }
  function deleteValue() {
    // counter--;
    if (counter <= 0) {
      counter=0;
      setCounter(counter)

    } else {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1 >chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue} >Add value </button> <span>   </span>
      <button onClick={deleteValue}>Delete value </button>
    </>
  );
}

export default App;



//featuresin react Fibre

//pause reuse priority abort

//reconcilliation-calculating diff between DOM and virtual DOM