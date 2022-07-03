import React from 'react';

import PersonForm from './PersonForm';
import './index.css';

const NewPerson = (props) => {
  return (
    <div className='new-person'>
      <PersonForm/>
    </div>
  );
};

export default NewPerson;