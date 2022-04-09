/* SORT: se utiliza para ordenar valores de un arreglo el primer parametro es el primer valor y el segundo es el que le sigue */

/*
const sortedStudent = students.sort((first, second) => {
  if(first.age > second.age){
    return 1;
  }else{
    return -1;
  }
});
*/
const sortedStudent = students.sort((a,b) => a.age > b.age ? 1 : -1);

console.info(sortedStudent);
console.info(numbers.sort((a,b) => a - b));