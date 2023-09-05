export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (!animal) {
    return "I do not like animals at all!";
  } else if (typeof animal === "string" && animal !== "cats") {
    return `I like ${animal}!`;
  }
}
