function cartNumberLoader () {
    const cartIndicator = document.querySelector('.cart-indicator');
    if (cartIndicator.innerText == "0" || cartIndicator.innerText == ""){
        cartIndicator.style.display = "none";
    }
}
cartNumberLoader();

const shopAll = document.getElementById('all-products')
const navbar1 = document.getElementById('nav-bar-1')
shopAll.addEventListener("mouseover", function () {
    navbar1.style.display = "flex"
})
shopAll.addEventListener("mouseout", function () {
    navbar1.style.display = "none"
});

addEventListener('DOMContentLoaded', function() {
})