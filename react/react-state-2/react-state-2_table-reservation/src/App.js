import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrementPeople() {
    setPeople(people + 1);
  }
  function handleDecrementPeople() {
    setPeople(people > 0 ? people - 1 : 0);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onIncrementPeople={handleIncrementPeople}
        onDecrementPeople={handleDecrementPeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
