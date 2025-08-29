alert("hola, en esta pre entrega n°2, intentare ser tu gestor de productos");

alert("antes que nada te solicitare tu nombre");

function saludar() {
    return
}

let nombre = prompt("ingresa tu nombre");

localStorage.setItem(`nombre`, nombre);
saludar = `hola ${nombre} bienvenido!!`;
alert(saludar);

let clave = prompt("genera una clave provisoria");

let claveUsuario = nombre + clave;

sessionStorage.setItem(`Usuario`, claveUsuario);
sessionStorage.removeItem(`claveUsuario`);

let nombreIngresado = nombre;
let claveIngresada = clave;


let products = [];
let produtId = 1;

const form = document.getElementById("productForm");
const container = document.getElementById("productsContainer");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const description = document.getElementById("productDescription").value;

    const product = {
        id: produtId++,
        name: name,
        price: price,
        description: description,
    };

    localStorage.setItem(`productInfo`, JSON.stringify(product));

    products.push(product);
    renderProduts();
    form.reset();
});

function renderProduts() {

    container.innerHTML = "";
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        const productInfo = document.createElement("div");

        productInfo.innerHTML = `${product.name} - $${product.price} - ${product.description}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        deleteButton.addEventListener("click", () => deleteProduct(product.id));

        productDiv.appendChild(productInfo);
        productDiv.appendChild(deleteButton);

        container.appendChild(productDiv);
    });
}
function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    renderProduts();

    localStorage.removeItem(`productInfo`);
}

