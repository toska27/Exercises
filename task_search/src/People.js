import React from 'react';
import Person from './Person';

function People({ people,query }) {
  return (
    <div className="people">  
        {people.filter(user => user.name.toLowerCase().includes(query)).length > 0 ? 
          people.filter(user => user.name.toLowerCase().includes(query)).map((user) => {
            return(
                <Person key={user.id} {...user}/>
            )
          }) : 
          <h3>No matches</h3>
        }
    
    </div>
  );
}

export default People;