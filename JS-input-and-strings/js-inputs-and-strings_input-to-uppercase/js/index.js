console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
const button = document.querySelector('[data-js="button-uppercase"]');
const input = document.querySelector('[data-js="first-input"]');

button.addEventListener("click", () => {
  input.textContent = input.value.toUpperCase();
});
