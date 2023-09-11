import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="green" disabled={false} text="best button" />;
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ backgroundColor: { color } }} disabled={disabled}>
      {text}
    </button>
  );
}
