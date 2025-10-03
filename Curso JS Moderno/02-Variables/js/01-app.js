// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

// Las variables se pueden reasignar
producto = "Monitor de 19 pulgadas";
console.log(producto);

// JS es un lenguaje dinamico, y debilmente tipado
producto = 20;
console.log(producto);

// Se puede inicializar sin valor y asignarlo después
var disponible;
disponible = true;

disponible = false;

// Se puede inicializar multiples variables
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificacion = 10;


// No se puede inicializar con numeros una variable
// var 99dias;

// Pero si se puede inicializar con guiones bajos
var _99dias;

// Al inicializar una variable se recomienda que se utilize camel case y la vibora
var nombreProductos;
var nombre_producto_;