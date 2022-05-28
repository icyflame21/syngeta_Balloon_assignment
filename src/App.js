import { useState } from "react";
import "./App.css";
import { Circle_Container } from "./Components/Circle-Container";
import { Empty_Container } from "./Components/Empty-Container";

function App() {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value > 5 || value < 1) alert("Please enter a number between 1 to 5");
    let val = document.getElementById(`empty-circle-${value}`);
    if (val.style.display == "block") alert("Number already present in the container\nEnter a different number");
   
    document.getElementById(`circle-${value}`).style.display = "none";
    document.getElementById(`empty-circle-${value}`).style.display = "block";
    setValue("")
  };

  return (
    <div className="parentContainer">
      <Empty_Container/>
      <Circle_Container/>
      <div className="input-container">
        <input
          type="number"
          id="number"
          autoFocus="true"
          placeholder="Enter a number between 1 to 5"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="submit" onClick={onSubmit}>
          Shoot
        </button>
      </div>
    </div>
  );
}

export default App;
