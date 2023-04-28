// //Declaración de la función 
// function miFuncion(a, b) {
//     console.log("Suma: " + (a + b));
// }
// //Llamando a la función 
// miFuncion(2 ,3)
function miFuncion(a, b) {
    return a + b;
}
//Llamando a la función 
let resultado = miFuncion(2 ,3)
console.log(resultado);

//Declaracion de una funcion de tipo expresion 
let x = function (a, b)
    {return a + b}; 

resultado = x(1, 2);
console.log(resultado);