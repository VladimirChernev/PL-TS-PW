// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capitol: string;
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface

const firstCountry: Country = {
  name: "Bulgaria",
  capitol: "Sofia",
  population: 6700000,
  language: "bulgarian",
};

const secondCountry: Country = {
  name: "Italy",
  capitol: "Rome",
  population: 59000000,
  language: "italian",
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(country: Country) {
  return `The capitol of ${country.name} is ${country.capitol}. 
  The official language is ${country.language} and population of ${country.population} people.`;
}

const detailsAboutBulgaria = displayCountryDetails(firstCountry);
const detailsAboutItaly = displayCountryDetails(secondCountry);
// console.log(detailsAboutBulgaria, "\n", detailsAboutItaly);

//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"

const studentOne: Student = { id: 1, name: "Pesho", age: 20, grade: 6 };
const studentTwo: Student = { id: 2, name: "Tosho", age: 22, grade: 5 };

// Step Three: Declare array "students" with objects of type "Student"

let studentArray: Student[] = [
  studentOne,
  studentTwo,
  { id: 3, name: "Ivan", age: 25, grade: 5 },
];

studentArray.map((student) => (student.grade = 4));
studentArray.map((student) => {
  if (student.name === "Tosho") {
    student.grade = 3;
  }
});
// console.log("students", studentArray);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

const studentNames = getStudents(studentArray);
// console.log("studentNames", studentNames);

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

function sortStudents(students: Student[]) {
  const sorted = students.sort((a, b) => a.id - b.id);
  return sorted;
}

const sortedStudents = sortStudents(studentArray);
console.log("sortedStudents", sortedStudents);
