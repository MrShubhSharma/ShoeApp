// script.js

const products = [
    { id: 1, name: "Men's Sneakers", price: 50 },
    { id: 2, name: "Women's Boots", price: 60 },
    { id: 3, name: "Kid's Shoes", price: 40 },
    // Add more products as needed
];

const productGrid = document.getElementById('product-grid');

// Function to render products
function renderProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    // Logic to add product to cart
    console.log('Adding to cart:', selectedProduct);
}

// Initial render
renderProducts();
