alert ("hola, bienvenido a la 1er pre entrega de JavaScript. funcionare como tu carrito de compras, almacenare tus datos con tus productos.");

let nombre
nombre = prompt("ingresa tu nombre");

let edad
edad = parseInt(prompt("ingresa tu edad"));

let dinero 
dinero = parseInt(prompt("ingresa tu cantidad de dinero, para realizar el calculo al final de tu cuenta debes ingresar un minimo de 100"));

if (edad >= 12 && dinero >= 100) {
    alert ("podemos dejarte ingresar al super");
} else if (edad >= 12 || dinero <= 99) {
    alert ("puedes pasar pero no tienes dinero, no puedes comprar mucho");
} else if (edad <= 11 || dinero >= 100) {
    alert ("eres menor, pero tienes dinero. esperaremos a que llegue un adulto");
} else {
    alert ("eres menor y ademas no tienes dinero. no podras pasar esperaremos a un adulto");
} 

alert ("bienvenido al supermercado");

const IVA = 0.21;

let totalDeArticulos = `articulos: \n`;
let precioTotalSinIVA = 0;
let agregar = confirm ("agrega los productos a añadir a tu lista");

while (agregar) {
    let nombreDelProducto = parseInt(prompt("ingresa el nombre del producto"));
    let precioDelProducto;

do {
    precioDelProducto = parseInt(prompt("ingresa el precio del producto"));

    if (isNaN(precioDelProducto) || precioDelProducto <= 0) {
        alert("ingresa un numero, positivo.");
    }

} while(isNaN(precioDelProducto) || precioDelProducto <= 0);

    precioTotalSinIVA += precioDelProducto;
    totalDeArticulos += `${nombreDelProducto}\n`;
agregar = confirm("¿quieres agregar otro arculo?");
}

let precioTotalConIVA = precioTotalSinIVA * (1 + IVA);

alert (`${totalDeArticulos}\n 
    - precio total con iva = ${precioTotalConIVA}\n
    - precio total sin iva = ${precioTotalSinIVA}\n
    - tu dinero ${dinero}\n`);

    document.write (`esta seria tu lista para imprimir ${totalDeArticulos}`);
