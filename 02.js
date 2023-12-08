/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
   var index = 0;
    var cont = strings[index].length
    
    for(let j = 1; j<strings.length; j++){
        if(cont <= strings [j].length){
            cont = strings [j].length;
            index = j         
        }
    }
    var res = strings[index];
    return res;
}
// No modifiques nada debajo de esta linea //
module.exports = stringMasLarga