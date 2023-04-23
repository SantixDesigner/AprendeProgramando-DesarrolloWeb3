/*
En este desafío deberás crear un algoritmo que tome un array, agregarle información (además de la que ya contiene) y crear una copia de este array. 
Utilizar:

Spread Operator
Map()
 */

let array1 = [1,2,3];

let copyArr = [...array1, 4, 5, 6];

copyArr.map(numeroDeArrays => {
    console.log(numeroDeArrays);
})