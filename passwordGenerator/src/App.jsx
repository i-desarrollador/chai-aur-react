import { useState } from "react";
import { useCallback ,useEffect ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%&*";
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass)
    }
  }, [numberAllowed, length, symbolAllowed, setPassword]);
  useEffect(()=>{passwordGenerator()},[length,symbolAllowed,numberAllowed,passwordGenerator])

  const copyPassToClip=useCallback(()=>{
    passwordRef.current?.select() 
    // passwordRef.current?.setSelectionRange(0,3) 
      window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-gray-800">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          placeholder="password"
          className="outline-none w-full py-3 px-3 mt-5 mb-3 - rounded-l "
          ref={passwordRef}
        />
        <button onClick={copyPassToClip} className="outline-none bg-blue-700 text-white px-3 py-3 mt-5 mb-3 rounded-r shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 text-white">
          <input
            type="range"
            min={6}
            max={12}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="text-white">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="text-white">
          <input
            type="checkbox"
            defaultChecked={symbolAllowed}
            id="symbolInput"
            onChange={() => {
              setSymbolAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="symbolInput">Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
