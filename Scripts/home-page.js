function cartNumberLoader () {
    const cartIndicator = document.querySelector('.cart-indicator');
    if (cartIndicator.innerText == "0" || cartIndicator.innerText == ""){
        cartIndicator.style.display = "none";
    }
}
cartNumberLoader();


const navbar1 = document.getElementById('nav-bar-1');
const clickItems = document.querySelectorAll('.click-item');
const hoverItems = document.querySelectorAll('.hover-item');
const crossButton = document.querySelector('.cross-button');
const lineButton = document.querySelector('.line-button');
let isClicked = false;
hoverItems.forEach(e => {
    e.addEventListener("mouseout", function () {
        if (isClicked == false){
            navbar1.style.display = "none";
        }
    });
    e.addEventListener("mouseover", function () {
        if (isClicked == false){
            navbar1.style.display = "flex";
        }
    })
});
clickItems.forEach(e => {
    e.addEventListener("mousedown", function () {
        if (navbar1.style.display == "none") {
            navbar1.style.display = "flex";
            isclicked = true;
            crossButton.style.display = "flex"
            lineButton.style.display = "none"
        }
        else {
            navbar1.style.display = "none";
            isclicked = false;
            crossButton.style.display = "none"
            lineButton.style.display = "flex"
        }
    })
});

addEventListener('DOMContentLoaded', function() {
});
