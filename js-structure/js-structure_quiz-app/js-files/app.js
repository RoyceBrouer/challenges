import { Header } from "./header";
import { Form } from "./formFunctionality";
import { CardList } from "./cardsData";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
