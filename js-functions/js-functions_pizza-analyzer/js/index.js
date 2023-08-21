console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, parseFloat(pizzaInput1.value));
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, parseFloat(pizzaInput2.value));
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  output.textContent = Math.round(((area2 - area1) / area1) * 100);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else if (size1 < size2) {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
//better would have been a turnery

// 1. Write a function `updateOutputColor` with two parameters: `size1` and `size2`.
// 2. Set the background color of the `outputSection` to "var(--red)", if we loose pizza. Otherwise, the background color should be set to "var(--green)"
// 3. Use this function in both event listeners with the correct sizes as arguments.

//    > 💡 `var(--<variable-name>)` is how you can use predefined variables in CSS. In this case, both color codes are stored in the variables `--red` and `--green` on the `:root` element of the HTML document (have a look into the CSS file!).
