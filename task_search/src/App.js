import React, { useState } from 'react';
import users from './Users';
import People from './People';

function App() {
  const [people, setPeople] = useState(users);
  const [query, setQuery] = useState(''); 

  return (
    <div className="app">
      <input type='text' placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)} />
      <People people={people} query={query}/>
    </div>
  );
}

export default App;
