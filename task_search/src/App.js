import React, { useState, useEffect } from 'react';
import People from './People';
import Loading from './Loading';
const url = 'http://localhost:8000/users';

const App = () => {
  const [people, setPeople] = useState(null);
  const [query, setQuery] = useState(''); 
  const [loading, setLoading] = useState(true);

  const fetchPeople = async () => {
    try{
      const response = await fetch(url);
      const people = await response.json();
      setLoading(false);
      setPeople(people);
    } catch (error){
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchPeople();
  }, []);


  if(loading){
    return (
      <main>
        <Loading />
      </main>
    ) 
  }

  return (
    <div className="app">
      <input type='text' placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)} />
      {people && <People people={people} query={query}/>}
    </div>
  );
}

export default App;
