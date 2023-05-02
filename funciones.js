// //Declaración de la función 
// function miFuncion(a, b) {
//     console.log("Suma: " + (a + b));
// }
// //Llamando a la función 
// miFuncion(2 ,3)
function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}
//Llamando a la función 
let resultado = miFuncion(2 ,3)
console.log(resultado);

//Declaracion de una funcion de tipo expresion 
let sumar = function (a, b)
    {return a + b}; 

resultado = sumar(1, 2);
console.log(resultado);

//self invoking functions
(function(a,b){
    console.log("Ejecutando la función: " + (a + b));  
})(3, 4);

//Funcion como objeto

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);