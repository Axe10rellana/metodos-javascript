/* MAP: el map si retorna un nuevo arreglo por lo que no es necesario una variable que este fuera y si se puede usar el return para devolver el o los datos necesarios */
const fullName = students.map((student) => {
  return `${student.name} ${student.lastname}`;
});
console.info(fullName);
console.info('--------------------------------');

const estudiante = students.map((student) => {
  return {
    fullName: `${student.name} ${student.lastname}`,
    age: student.age,
    course: student.course,
  }
});
console.info(estudiante);
console.info('-----------------------------------');

const estudianteNuevoDato = students.map((student) => {
  return {
    ...student,
    title: `${student.name} - ${student.course}`,
  }
});
console.info(estudianteNuevoDato);
console.info('------------------------------------');

const newCourses = students.map((student) => {
  return {
    ...student,
    course: `Programming`,
  }
});
const doubleAge = newCourses.map((student) => {
  return {
    ...student,
    age: student.age * 2,
  }
});

const doubleAgeModificado = students.map((student) => {
  return{
    ...student,
    course: `Programming`,
  }
}).map((student) => {
  return{
    ...student,
    age: student.age * 2,
  }
});

console.info(newCourses);
console.info('------------------------------------');
console.info(doubleAge);
console.info('------------------------------------');
console.info(doubleAgeModificado);