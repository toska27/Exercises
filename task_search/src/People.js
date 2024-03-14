import React from 'react';
import Person from 'Person';

function People({ people }) {
  return (
    <div className="people">  
        {people.map((user) => {
            return(
                <Person key={user.id} {...user}/>
            )
          }) 
        }
    
    </div>
  );
}

export default People;