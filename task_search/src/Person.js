import React from 'react';

function Person({ id, name, surname, email, gender }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{gender}</td>
    </tr>
  );
}

export default Person;