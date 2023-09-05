import { people } from "./index.test";

export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  const peopleOlderThan = people.filter((person) => person.age > age);
  const result = peopleOlderThan.map(
    (person) => `${person.firstName} ${person.lastName}`
  );
  return result;
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  const peopleSortedByAge = people.sort((personA, personB) => {
    if (personA.age < personB.age) {
      return -1;
    }
    if (personA.age > personB.age) {
      return 1;
    }
    return 0;
  });
  return peopleSortedByAge.map(
    (person) => `${person.firstName} ${person.lastName}`
  );
}
