import React from "react";
import "./PersonInfo.css";

const PersonInfoComponent = ({ person }) => {
  const { title, name, age, occupation, address } = person;
  const clickHandler = (event) => {
    console.log("Button Click Handler");
  };
  return (
    <div className="person">
      <h3 className="person__info">
        <label>Name: {title + name} </label>
        <label>Age: {age} </label>
        <label>Occupation: {occupation}</label>
        <label>Address: {address}</label>
      </h3>    
      <button className='person__update' onClick={clickHandler}>Click Me!</button> 
    </div>
  );
};
export default PersonInfoComponent;
