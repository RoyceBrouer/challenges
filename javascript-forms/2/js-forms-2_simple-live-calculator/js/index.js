console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

console.log("before: ", firstInput.value);

firstInput.addEventListener("input", () => {
  result.textContent = `Result: ${
    parseInt(firstInput.value) * parseInt(secondInput.value)
  }`;
  console.log("after: ", firstInput.value);
  // secondInput.value = ++firstInput * +secondInput;
});

secondInput.addEventListener("input", () => {
  result.textContent = `Result: ${
    parseInt(firstInput.value) * parseInt(secondInput.value)
  }`;
  // firstInput.value = +firstInput * +secondInput;
  // secondInput.value = ++firstInput * +secondInput;
});

/* There are two form fields where the user can enter a value.
As soon as one of these values change, both values shall be 
multiplied. The result is to be rendered with the help of 
the output element. */
