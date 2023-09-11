import "./styles.css";

export default function App() {
  return <Greeting name="Laya" />;
}

const coaches = ["Laya", "Jan"];

function Greeting({ name }) {
  return <h1>Hello, {coaches.includes(name) ? "Coach" : { name }}!</h1>;
}
