import React from "react";
import NewPerson from "../NewPerson";
import PersonInfoComponent from "../PersonInfoComponent";

const Persons = (props) => {
  const { persons } = props;

  return (
    <div>
      <NewPerson/>
      <ul style={{listStyle: 'none'}}>
        {persons.map((person) => (
          <li>
            <PersonInfoComponent person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
