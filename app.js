alert ("hola, bienvenido a la 1er pre entrega de JavaScript. funcionare como tu carrito de compras, almacenare tus datos con tus productos.");

let nombre
nombre = prompt("ingresa tu nombre");

let edad
edad = prompt("ingresa tu edad");

let dinero 
dinero = prompt("ingresa tu cantidad de dinero, para realizar el calculo al final de tu cuenta debes ingresar un minimo de 100");

const IVA = 0.21;

if (edad >= 12 && dinero >= 100) {
    alert ("podemos dejarte ingresar al super");
} else if (edad >= 12 || dinero <= 99) {
    alert ("puedes pasar pero no tienes dinero, no puedes comprar mucho");
} else if (edad <= 11 || dinero >= 100) {
    alert ("eres menor, pero tienes dinero. esperaremos a que llegue un adulto");
} else {
    alert ("eres menor y ademas no tienes dinero. no podras pasar esperaremos a un adulto");
} 

let articulo = prompt("ingresa los articulos que necesitas");

let precio = parseIntprompt("ingresa su precio");

function precioTotalSinIVA = ()

function precioTotalConIVA =

const carrito = articulo;
console.log (carrito);
