//Paso por valor 
//Tipos primitivos
let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x); //10
console.log(x);
//console.log(a);

//Paso por referencia

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);