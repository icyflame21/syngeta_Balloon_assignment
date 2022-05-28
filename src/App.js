import { useState } from "react";
import "./App.css";

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
  const onEmptyCircles = (e) => {
    var val = e.target.id
    document.getElementById(`${val}`).style.display = "none";
    var new_circle = val.replace("empty-", "")
    document.getElementById(`${new_circle}`).style.display = "block";
  }
  return (
    <div className="parentContainer">
      <div className="empty-circles-container">
        <p className="text-center">Empty Div</p>
        <div className="empty-circles" onClick={(e)=>onEmptyCircles(e)}>
          <div
            className="circle"
            id="empty-circle-1"
            style={{ display: "none" }}
          >1</div>
          <div
            className="circle"
            id="empty-circle-2"
            style={{ display: "none" }}
          >2</div>
          <div
            className="circle"
            id="empty-circle-3"
            style={{ display: "none" }}
          >3</div>
          <div
            className="circle"
            id="empty-circle-4"
            style={{ display: "none" }}
          >4</div>
          <div
            className="circle"
            id="empty-circle-5"
            style={{ display: "none" }}
          >5</div>
        </div>
      </div>
      <div className="circles-container">
        <p className="text-center">5 Circles</p>
        <div className="circle" id="circle-1">1</div>
        <div className="circle" id="circle-2">2</div>
        <div className="circle" id="circle-3">3</div>
        <div className="circle" id="circle-4">4</div>
        <div className="circle" id="circle-5">5</div>
      </div>

      <div className="input-container">
        <input
          type="number"
          id="number"
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
