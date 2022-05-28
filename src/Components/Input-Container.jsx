import React, { useState} from "react";

export const Input_Container = () => {
    const [value, setValue] = useState("");
    
// onSubmit function udpates the state "setValue" as per the entered the number , afterwards respective styles is been applied to each circle present in the circle container
    
  const onSubmit = () => {
    if (value > 5 || value < 1) alert("Please enter a number between 1 to 5");
    let val = document.getElementById(`empty-circle-${value}`);
    if (val.style.display === "block")
      alert(
        "Number already present in the container\nEnter a different number"
      );

    document.getElementById(`circle-${value}`).style.display = "none";
    document.getElementById(`empty-circle-${value}`).style.display = "block";
    setValue("");
  };
  return (
    <div className="input-container">
      <input
        type="number"
        id="number"
        autoFocus={true}
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
  );
};
