console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideError() {
  tosError.setAttribute("hidden", "");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

hideSuccess();

hideError();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkBox = document.querySelector("#tos");
  // --v-- write your code here --v--
  if (checkBox.checked) {
    alert("Form submitted");
    showSuccess();
    return;
  }
  showTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

// //TOS is short for Terms of Service. Here, the `alert()`
// in the submit event handler should only be called if the `tos`
// checkbox has been checked.

// // > 💡 You can use an early `return;` in an if statement
// to prevent the `alert()` from being called.

// // In addition, the error message below the checkbox should
// only be displayed if the checkbox is not set when submitting.
// Use the given functions `showTosError()` and `hideTosError()`.

// // Can you make the error message hidden initially (before the
// form is submitted)?

// // ## Bonus: Success message!

// // Add this HTML code to the [`index.html`](./index.html)
// below the form. Write JavaScript code to only show the div
// if the submission was valid (`tos` checkbox was checked).
// Like the error message, it should also be hidden initially.

// // ```html
// // <div data-js="success" class="success">Complaint
// successfully submitted!</div>
