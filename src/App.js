
import React, {useState} from "react";
import "./App.css";
import {Switch} from "antd";


const App = () => {

  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <div className="App">
     <Switch onClick={toggler}/>
     {toggle ? <span>Well darn it ya change</span>: <span>Wow still the same old you</span>}
    </div>
  );
}


export default App;
