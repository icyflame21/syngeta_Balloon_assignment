import "./App.css";
import { Circle_Container } from "./Components/Circle-Container";
import { Empty_Container } from "./Components/Empty-Container";
import { Input_Container } from "./Components/Input-Container";
import React from 'react'

function App() {
  return (
    <div className="parentContainer">
      <Empty_Container/>
      <Circle_Container/>
      <Input_Container/>     
    </div>
  );
}

export default App;
