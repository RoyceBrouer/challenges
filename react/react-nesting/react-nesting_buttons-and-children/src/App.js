import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>first</Button>
      <Button>second</Button>
      <Button>third</Button>
      <Button>forth</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
