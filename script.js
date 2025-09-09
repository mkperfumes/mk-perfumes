// Simple add-to-cart alert
const buttons = document.querySelectorAll(".product button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});
