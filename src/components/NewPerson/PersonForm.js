import React from 'react';

import './PersonForm.css';

const PersonForm = (props) => {
  return (
    <form >
      <div className='new-person__controls'>
        <div className='new-person__control'>
          <label>Title</label>
          <input type='text'/>
        </div>
        <div className='new-person__control'>
          <label>Age</label>
          <input type='number'/>
        </div>
        <div className='new-person__control'>
          <label>Occupation</label>
          <input type='text' />
        </div>
      </div>
      <div className='new-person__actions'>
        <button type='submit'>Add Person</button>
      </div>
    </form>
  );
};

export default PersonForm;
