import React, { useState } from "react";
import Person from "../Person/Person";
import Button from "../Button/Button";
import "./people.css";

const People = ({ people, query }) => {
  const [count, setCount] = useState(10);

  const search = (people) => {
    return people.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.surname.toLowerCase().includes(query)
    );
  };

  let amount = parseInt(count);
  let newSearch = search(people).splice(0, amount);

  return (
    <div className="people">
      <table>
        <tbody>
          <tr className={newSearch.length > 0 ? "table" : "non_view"}>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {newSearch.length > 0 ? (
            newSearch.map((user) => {
              return <Person key={user.id} {...user} />;
            })
          ) : (
            <tr>
              <th className="no_matches">No matches</th>
            </tr>
          )}
          <tr>
            <td
              colSpan="4"
              className={newSearch.length >= 10 ? "buttons" : "non_view"}
            >
              <Button
                className={count <= newSearch.length ? "more_view" : "non_view"}
                onClick={() => setCount(count + 10)}
                text="Show more"
              />

              <Button
                className={count > 10 ? "less_view" : "non_view"}
                onClick={() => setCount(count - 10)}
                text="Show less"
              />
            </td>
          </tr>
        </tbody>
      </table>
      {console.log("Window Location: ", window.location)}
    </div>
  );
};

export default People;
