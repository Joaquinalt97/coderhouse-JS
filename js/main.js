// variables
let cantidad = 1;
let cart = [];

// carga de datos json
async function loadproducts() {
    try {
        const response = await fetch('productos.json');
        const productos = await response.json();
        displayProductos(productos);
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "error al añadir objeto"
        });
    }
}

// mostrar productos del dom
function displayProductos(productos) {
    const productList = document.querySelector('.cards');
    productos.foreach(product => {
        const article = document.createElement('article');
        article.classList.add('card_card');
        article.innerHTML = `
        <div> class= "card__img"
            <img src="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="card__descripcion">
            <h4 class="descripcion__categoria"${product.categoria}</h4>
            <h2 class="descripcion__nombre"${product.nombre}</h2>
            <p class="descripcion__precio"${product.precio}</h4>
        </div>
        <button onclick="addToCart(${product.id}, this)" class="card__btn-shop">
            <i class="ri-shopping-cart-2-fill"></i>
            Añadir al Carrito
        </button>
        <div class="card__cantidad" id="card__cantidad-${product.id}">
            <button class="cantidad__btn-remove" onclick="decrementarProducto(${product.id})">
                <i class="ri-indeterminate-circle-fill"></i>
            </button>
            
        </div>

        `
    });
}

