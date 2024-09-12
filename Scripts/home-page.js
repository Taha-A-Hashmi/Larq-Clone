// Cart Icon Display
const cartIndicator = document.querySelector('.cart-indicator');
function cartNumberLoader() {
    if (cartIndicator.innerText === "0" || cartIndicator.innerText === "") {
        cartIndicator.style.display = "none";
    }
}
cartNumberLoader();



// Cart Functionality and Div
const cartBtn = document.getElementById('cart-btn');;
const cartContainer = document.getElementById('cart-container');
const closeBtn = document.getElementById('cart-close-btn');
cartBtn.addEventListener('click', () => {
    cartContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
    cartContainer.style.display = 'none';
    document.body.style.overflow = 'visible';
});

const cartButtons = [...document.getElementsByClassName('cart-btn')];
const cartProducts = document.getElementById('product-list');
cartButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let title = button.parentElement.children[2].innerText;
        let size;  
        let price;  
        // Assigning the selected size and price on click
        const productDiv = button.closest('.product');
        const radioButtons = productDiv.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radio) => {
        if (radio.checked) {
            size = radio.nextElementSibling.innerText;
            price = radio.parentElement.parentElement.parentElement.children[4].children[0].innerText;
            cartProducts.innerHTML += `
            <div class="list-product-container flex h-[80px] w-[100vw] md:w-[420px] my-[30px]">
                <div class="product-image bg-[rgb(244,248,250)] h-[80px] w-[80px] rounded-sm"></div>
                <div class="list-product-text w-[335px] flex flex-col pl-[15px]">
                    <div class="list-product-h1 flex justify-between">
                        <div class="text-[15px] text-[#153a5b] font-bold leading-[1.6]">Product Name</div>
                        <button title="Delete Item" class="delete-btn h-[12px] w-[12px] mt-[4px]" type="button">
                            <svg viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg" role="img">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1h3a1 1 0 1 1 0 2h-.544l-.37 8.136A3 3 0 0 1 10.089 16H4.91a3 3 0 0 1-2.997-2.864L1.544 5H1a1 1 0 0 1 0-2h3V2Zm2 1h3V2H6v1ZM3.546 5l.366 8.045a1 1 0 0 0 1 .955h5.177a1 1 0 0 0 .999-.955L11.454 5H3.545Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="list-product-h2 text-[#757575] text-[13px]">Insulated | ${size}</div>
                    <div class="counter-price flex justify-between mt-[5px]">
                        <div class="counter h-[30px] w-[100px] rounded-xl bg-slate-400"></div>
                        <div class="price text-[15px] text-[#153a5b] font-bold leading-[1.6]">${price}</div>
                    </div>
                </div>
            </div>`;    
        }
        let productList = document.getElementById('product-list');
        let prices = [...productList.getElementsByClassName('price')];
        let priceNum = 0;
        prices.forEach(price => {
            let numString = price.innerText;
            priceNum += Number(numString.slice(1));
        });
        let subtotal = '$' + String(priceNum);
        document.getElementById('subtotal-cost').innerText = `${subtotal}`;
        if (prices.length > 0) {
            cartIndicator.innerText = `${prices.length}`;
            cartIndicator.style.display = "";
        }
    });
  });
});



// Navbar Mega Menu
const navbar1 = document.getElementById('nav-bar-1');
const clickItems = document.querySelectorAll('.click-item');
const hoverItems = document.querySelectorAll('.hover-item');
const crossButton = document.querySelector('.cross-button');
const lineButton = document.querySelector('.line-button');
let isClicked = false;
hoverItems.forEach(e => {
    e.addEventListener("mouseover", function () {
        if (!isClicked) {
            navbar1.style.display = "flex";
        }
    });
    e.addEventListener("mouseout", function () {
        if (!isClicked) {
            navbar1.style.display = "none";
        }
    });
});
clickItems.forEach(e => {
    e.addEventListener("mousedown", function () {
        if (!isClicked) {
            navbar1.style.display = "flex";
            isClicked = true;
            crossButton.style.display = "flex";
            lineButton.style.display = "none";
        } else {
            navbar1.style.display = "none";
            isClicked = false;
            crossButton.style.display = "none";
            lineButton.style.display = "flex";
        }
    });
});



// Slider Settings
const productCont = document.getElementsByClassName('products')[0];
const products  = [...document.getElementsByClassName('products')];
const nxt_btn = document.getElementsByClassName('nxt-btn')[0];
const prv_btn = document.getElementsByClassName('prv-btn')[0];

products.forEach(product => {
    let productDimensions = product.getBoundingClientRect();
    let productWidth = (productDimensions.width + 5);

    nxt_btn.addEventListener('click', () => {
        productCont.scrollLeft += productWidth;
    })
    prv_btn.addEventListener('click', () => {
        productCont.scrollLeft -= productWidth;
    })
});



// Product Card Settings
const productSizes1 = [...document.getElementsByClassName('size-opt-1')];
productSizes1.forEach(e => {
    if (e.checked) {
        const priceLabel1 = e.parentElement.parentElement.parentElement.children[4].children[0];
        const priceLabel2 = e.parentElement.parentElement.parentElement.children[4].children[1];
        priceLabel1.innerText = '$100';
        priceLabel2.innerText = '$130';
    }    
    e.addEventListener('change', () => {
        if (e.checked) {
            const priceLabel1 = e.parentElement.parentElement.parentElement.children[4].children[0];
            const priceLabel2 = e.parentElement.parentElement.parentElement.children[4].children[1];
            priceLabel1.innerText = '$100';
            priceLabel2.innerText = '$130';
        }
    })
});

const productSizes2 = [...document.getElementsByClassName('size-opt-2')];
productSizes2.forEach(e => {
    e.addEventListener('change', () => {
        if (e.checked) {
            const priceLabel1 = e.parentElement.parentElement.parentElement.children[4].children[0];
            const priceLabel2 = e.parentElement.parentElement.parentElement.children[4].children[1];
            priceLabel1.innerText = '$130';
            priceLabel2.innerText = '$150';
        }    
    })
});