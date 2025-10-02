// alert("Hola mundo");
// Pregunta al usuario su nombre
const nombre = prompt('¿Cuál es tu nombre?: ');
//Permite selecionar elementos del html, ejemplo el nombre de la clase div
// Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JS Moderno`;

// Asigna el valor hacia la variable producto
const producto = "Monitor 24 pulgadas";                                                             

console.time('Hola');
console.warn('Eso no está permitido');
console.timeEnd('Hola');


//Crear objetos:
// Objeto: variable con multiples valores
const obj = {
    nombre: 'juan',
    apellido: 'Jul',
    edad: 24
}

// El ; sirve para decir implicitamente el final de una linea de código

/* ESlint 
Nos ayuda a corregir nuestros errores
*/