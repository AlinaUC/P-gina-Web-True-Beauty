// Obtiene todos los enlaces de categorías
const categoryLinks = document.querySelectorAll(".category-link");

// Agrega un evento de clic a cada enlace de categoría
categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Obtiene la categoría seleccionada desde el atributo data-category
        const selectedCategory = link.getAttribute("data-category");

        // Obtiene todos los productos
        const products = document.querySelectorAll(".product");

        // Itera sobre los productos y muestra u oculta según la categoría
        products.forEach((product) => {
            const productCategory = product.getAttribute("data-category");
            if (selectedCategory === "todos" || selectedCategory === productCategory) {
                product.style.display = "block"; // Muestra el producto
            } else {
                product.style.display = "none"; // Oculta el producto
            }
        });
    });
});