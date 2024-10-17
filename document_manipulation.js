// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Write a function to display the product information on the webpage dynamically.
function displayProducts() {
    // Find where to put the product info on the webpage
    let productContainer = document.getElementById("product-list");
    // Clear out anything that might already be there
    productContainer.innerHTML = "";
    // Loop through each product in the array
    products.forEach(function(product) {
        //Create a new div (box) for each product
        let productDiv = document.createElement("div");

        // Set the content for the product
        productDiv.inngerHTML = `<h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>`;

        // Add the product box to the container
        productContainer.appendChild(productDiv);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.
window.addEventListener("load", displayProducts);