import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">lack of creativity</h2>
      <label htmlFor="input1"></label>
      <input id="input1" type="text" />
      <a
        className="article__link"
        href="https://www.pinterest.com/hogwildcm84/cute-pig-pictures/"
      >
        cute pig pictures
      </a>
    </article>
  );
}
