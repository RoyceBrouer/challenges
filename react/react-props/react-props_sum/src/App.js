import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA="3" valueB="5" />;
}

function Sum({ valueA, valueB }) {
  let result = Number(valueA) + Number(valueB);
  return (
    <h1>
      {valueA} + {valueB} = {result}
    </h1>
  );
}
