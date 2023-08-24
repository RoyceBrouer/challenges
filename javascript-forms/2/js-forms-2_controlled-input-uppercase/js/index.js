console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", () => {
  input.value = input.value.toUpperCase();
});

/* Please consider

- the `input` event as well as
- how to read and write the value of a form field. 
There's definitely a difference between the value of 
the event's target and the (after-event) value of your 
input field.*/
