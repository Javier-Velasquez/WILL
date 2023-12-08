/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  const numeros = array.filter(elemento => typeof elemento === 'number');
        return numeros;
  }

// No modifiques nada debajo de esta linea //

// const names = ["Milo", 4, 'Gladys', 59, 'Teo', 64, 'Felix', 29];
// const aloneNumbers = soloNumeros(names);
// console.log(aloneNumbers)
module.exports = soloNumeros