console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let language of programmingLanguages) {
  const listItem = document.createElement("li");
  listItem.textContent = language;
  ol.append(listItem);
}
// --^-- write/change code here --^--
/*there is

- an `ol` created and appended to the document
- a string array stored to a variable called 
`programmingLanguages`.

For each array item, create a list item for the 
ordered list with its value as visible text. 
Use the `for...of` loop.

The following hints may guide you:

- What was the property to set the text of an 
HTML element again?
- Don't forget to append each list item!
 */
