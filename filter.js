/* FILTER: al igual que el metodo map devuelve un arreglo nuevo y tambien permite pasar una condicion para filtrar los resultados que se esperan obtener */
const filterStudent = students.filter((student) => student.course === 'Web Development');
console.info(filterStudent);