import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//standard react way 
const anotherUser='chai aur code'
const reactElem = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google"
  // ,anotherUser //-variable if any
);


//another way
function MyApp(){
  return(
    <h1>hello goosgle</h1>
  )
}

//another way
const anotherElem=(
  <a href='https://google.com' target="_blank">Visit Google</a>
)
ReactDOM.createRoot(document.getElementById("root")).render(
 
  // <MyApp/>
  // MyApp()
  // anotherElem
  reactElem
  
);

// how you custom design it
// const reactElem={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank',

//   },
//   children:"click me to visit google"
// }
