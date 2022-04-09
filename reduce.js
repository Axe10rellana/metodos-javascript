/* REDUCE: es igual que el metodo map pero con la diferencia que el primer parametro recibe un acumulador */
const reduce = students.reduce((total, student) => total + student.age, 0);
console.info(result);

/*
  const skillsResult = developers.reduce((allSkills, student) => {
  return [...allSkills, ...student.skills];
}, []);
console.info(skillsResult);
*/

//el tipo de dato Set es para que los datos no se repitan
const skillsResult = developers.reduce((allSkills, student) => {
  return Array.from(new Set([...allSkills, ...student.skills]));
}, []);
console.info(skillsResult);