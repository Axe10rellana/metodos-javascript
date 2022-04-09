/* ForEach: el forEach no retorna un nuevo arreglo por lo que hay que guardar el dato en una variable que este fuera del foreach */

const nombreDeLosEstudiantes = [];
students.forEach((student, index, students) => {
  nombreDeLosEstudiantes.push(`${student.name} ${student.lastname}`);
});
console.info(nombreDeLosEstudiantes);
console.info('---------------------------------');