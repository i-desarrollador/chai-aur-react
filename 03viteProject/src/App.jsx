import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/cards'

function App() {
  
  let [count, setCount] = useState(0);

  let myObj={
    key:12,
    username:"ankit"
  }
  let myArray=[23,24,25]
  return (
    <>
      <Card  username={myObj.username} btnText="click me "/>
      <Card username="rohan"  btnText="click me now "/> 
    </>
  );
}

export default App;
