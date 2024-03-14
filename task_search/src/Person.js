import React from 'react';

function Person({ id, name, surname, email, gender }) {
  return (
    <div className="person">
      <h3>{name}</h3>
      <h3>{surname}</h3>
      <h3>{email}</h3>
      <h3>{gender}</h3>
    </div>
  );
}

export default Person;