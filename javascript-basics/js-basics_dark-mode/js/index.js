console.clear();

const lightButton = document.querySelector('[data-js="light-mode-button"]');

const darkButton = document.querySelector('[data-js="dark-mode-button"]');

const toggleButton = document.querySelector('[data-js="toggle-button"]');

const bodyElement = document.querySelector('[data-js="body"]');

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
