import React, { useState, useEffect } from "react";
import People from "../People/People";
import Loading from "../Loading/Loading";
import Input from "../Input/Input";
import "./app.css";
const url = "http://localhost:8000/users";

const App = () => {
  const [people, setPeople] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPeople = async () => {
    try {
      const response = await fetch(url);
      const people = await response.json();
      setLoading(false);
      setPeople(people);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="app">
      <Input
        type={"text"}
        placeholder={"Search..."}
        className={"search"}
        onChange={(e) => setQuery(e.target.value)}
      />
      {people && <People people={people} query={query} />}
    </div>
  );
};

export default App;
