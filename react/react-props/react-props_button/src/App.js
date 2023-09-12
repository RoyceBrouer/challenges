import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      color="green"
      disabled={false}
      text="best button"
      onButtonClick={() => alert("you clicked")}
    />
  );
}

function Button({ color, disabled, text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
