console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});

// const form = document.querySelector('[data-js="form"]');
// const termsAndCoditions = document.querySelector(#"terms-of-service");

// form.addEventListener("submit", (event) {
//   event.preventDefault();

// })
/* Make sure that the user submits all 
relevant information in a correct format.

Use the following guidelines:

- First and last name are required and are 
allowed to have at least 4 and up to 30 characters.
- The user needs to be at least 14 years old.
- We need a correct email adress (i.e. including 
  an `@` symbol) for contacting the user.
- It's necessary that the user has read the terms 
of service and agrees to them.

Switch to the [`index.html`](./index.html) file 
and validate the form in the mentioned way! */
