// Product List and Display
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    let productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    products.forEach(function(product) {
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `<h2>${product.name}</h2>
                                <p>Price: $${product.price}</p>
                                <p>${product.description}</p>`;
        productContainer.appendChild(productDiv);
    });
}

// Form Submission and Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        let userInfo = { name: name, email: email, message: message };
        console.log(userInfo);
        alert("Form submitted successfully!");
    }
});

// Dynamic Box Color Change
document.getElementById("box").addEventListener("click", function() {
    this.style.backgroundColor = "yellow";
});

// Hover Effect for Box
document.getElementById("box").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

document.getElementById("box").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
});

// Display products when the page loads
window.addEventListener("load", displayProducts);
