import React from "react";
import "./PersonInfo.css";

class PersonInfo extends React.Component {
  Person  = {
    name: 'Ankit',
    age: 22,
    Occupation: 'Trainee'
  }

  render() {
    return (
       <div className="person">
        <label>Name</label>: <span>{this.Person.name}</span> <br/>
        <label>Age</label>: <span>{this.Person.age}}</span><br/>
        <label>Occupation</label>: <span>{this.Person.Occupation}</span><br/>
       </div>
    );
  }
}

export default PersonInfo;
