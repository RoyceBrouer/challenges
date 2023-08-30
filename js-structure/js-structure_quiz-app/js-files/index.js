// Store the cards in a global state
import cards, { CardList } from "./cardsData.js";
import { Header } from "./header.js";
import { handleFormSubmit } from "./formFunctionality.js";
import { Form } from "./formFunctionality.js";
import { Bookmark } from "./bookmarks.js";
import App from "./app.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
