console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const NumberA = +form.elements.numberA.value;
  const NumberB = +form.elements.numberB.value;
  function operator() {
    if (form.elements.operator.value === "addition") {
      return Number(NumberA) + Number(NumberB);
    } else if (form.elements.operator.value === "subtraction") {
      return Number(NumberA) - Number(NumberB);
    } else if (form.elements.operator.value === "multiplication") {
      return Number(NumberA) + Number(NumberB);
    } else if (form.elements.operator.value === "division") {
      return Number(NumberA) / Number(NumberB);
    }
  }
  result = operator();

  // const numberA = event.target.numberA.value;
  // const numberB = event.target.numberB.value;
  // const operator = event.target.operator.value;
  // console.log(event.target.radio.value)
  // switch(operator)
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

/* Add the following functionality to the submit event handler:

- Use the values of the `numberA` and `numberB` inputs to perform 
the operation selected by the `operator` input on them. 
You can use the provided helper functions `add()`, `subtract()`, 
`multiply()` and `divide()`.
- Assign the result to the `result` variable.

> 💡 Make sure to thoroughly test the addition operation, 
as it can have unexpected results.
*/
