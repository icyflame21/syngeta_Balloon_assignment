import React from 'react'

export const Empty_Container = () => {
  
  // onEmptyCircles function checks for which particular circle with that id is clicked and returns it respective styles

    const onEmptyCircles = (e) => {
        let val = e.target.id
        document.getElementById(`${val}`).style.display = "none";
        var new_circle = val.replace("empty-", "")
        document.getElementById(`${new_circle}`).style.display = "block";
      }
  return (
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
  )
}
