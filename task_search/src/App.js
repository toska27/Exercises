import React, { useState } from 'react';
import users from './Users';
import People from 'People';

function App() {
  const [people, setPeople] = useState(users);

  return (
    <div className="app">
      <input type='text' placeholder='Search...' className='search' />
      <People people={people} />
    </div>
  );
}

export default App;
