// sample array of students
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Doe",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "Javascript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];
const numbers = [10, 30, 1000, 100];

/* Combinar metodos */
const result = students.map(({name, lastname, age}) => ({
  student: `${name} ${lastname}`,
  age,
}))
  .filter((student) => student.age > 20)
  .sort((a,b) => a.age - b.age)
  .reduce((total, student) => total + student.age, 0);
console.info(result);