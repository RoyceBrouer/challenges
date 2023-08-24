console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

function reset(form) {
  form.reset();
  form.elements.headline.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const listItem = document.createElement("li");
  // listItem.innerHTML = `<h4>${data.headline}</h4> <p>${data.task}</p>`;
  // don't use innerHTML for user data --> to unsafe!
  const headLinetoDo = document.createElement("h4");
  headLinetoDo.textContent = data.headline;

  const actualToDo = document.createElement("p");
  actualToDo.textContent = data.task;
  todoList.append(listItem);
  listItem.append(headLinetoDo);
  listItem.append(actualToDo);

  reset(form);
});

/* ### 1. Listen to the submit event

- Write an event listener for the form submit.
- Log the user data to the console (we will use the 
    data later in this exercise).
- After submit, reset the form and focus the input field
 with the name `headline`.

### 2. Create list entries

Look at the [`index.html`](./index.html) file: there 
already is an `ul` for our submitted todos. We only need 
to write a function which creates list items and appends
 them to this list.

Here are some hints to guide you:

- The function needs one parameter (which will be the 
    form data object).
- The list item has
  - a headline containing the string from `data.headline`
  - a text element containing the string from `data.task`.
- Make sure NOT to use `innerHTML` since it is a [security 
    risk when working with user inputs]
    (https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations).
- Don't forget to
  - append the headline and text element to the 
  list item as well as the list item to the todoList
  - call the function when the submit event is 
  fired and pass the data object as an argument. */
