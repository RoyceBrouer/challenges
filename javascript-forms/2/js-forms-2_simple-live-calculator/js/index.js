console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

console.log("before: ", firstInput.value);

firstInput.addEventListener("input", () => {
  result.textContent = `${
    parseInt(firstInput.value) * parseInt(secondInput.value)
  }`; //this is not necessary if you multiply it should be converted to a number already
  console.log("after: ", firstInput.value);
});

secondInput.addEventListener("input", () => {
  result.textContent = `${
    parseInt(firstInput.value) * parseInt(secondInput.value)
  }`;
});
//different solution is to update the result...
//Why it is NaN is not solved for me

/* There are two form fields where the user can enter a value.
As soon as one of these values change, both values shall be 
multiplied. The result is to be rendered with the help of 
the output element. */
