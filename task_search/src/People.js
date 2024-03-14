import React from 'react';
import Person from './Person';

function People({ people,query }) {

    const search = (people) => {
        return people.filter(user => user.name.toLowerCase().includes(query) ||
                            user.surname.toLowerCase().includes(query));
    }

    let newSearch = search(people).splice(0, 10);     // Treba da se uradi kada se stisne dugme more, da se pojavi vise 


    return (
        <div className='people'>
            <table>
                <tr className={newSearch.length > 0 ? 'table' : 'non_table'}>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>  
                {newSearch.length > 0 ? 
                newSearch.map((user) => {
                    return(  
                        <Person key={user.id} {...user}/> 
                          
                    )
                })  
                : 
                <h3>No matches</h3>
                }
                <tr>
                    <td colSpan='4' className={newSearch.length > 0 ? 'button_more' : 'non_table'}>  
                        <button className='more' >Click for more</button>
                    </td>
                </tr>
            </table>
            
        </div>

    ); 
}

export default People;