// Cart Icon Display set None
const cartIndicator = document.querySelector('.cart-indicator');
function cartNumberLoader() {
    if (cartIndicator.innerText <= "0" || cartIndicator.innerText === "") {
        cartIndicator.style.display = "none";
    }

    else {
        cartIndicator.style.display = "flex";
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

// Add to Cart Listener to start everything
let totalCost;
const cartButtons = [...document.getElementsByClassName('cart-btn')];
const cartProducts = document.getElementById('product-list');
cartButtons.forEach((button) => {
    button.addEventListener('click', function() {        
        //Increasing Cart Count
        cartIndicator.innerText = Number(cartIndicator.innerText) + 1;
        cartNumberLoader();


        let title = button.parentElement.children[2].innerText;
        let size;  
        let price;  
        // Assigning the selected size and price on click
        const productDiv = button.closest('.product');
        const radioButtons = productDiv.querySelectorAll('input[type="radio"]');

        // Appending Items in Cart
        radioButtons.forEach((radio) => {
        if (radio.checked) {
            size = radio.nextElementSibling.innerText;
            price = radio.parentElement.parentElement.parentElement.children[4].children[0].innerText;
            document.getElementById('default-message').style.display = "none";
            cartProducts.innerHTML += `
            <div class="list-product-container flex h-[80px] w-[100vw] md:w-[420px] my-[30px]">
                <div class="product-image bg-[rgb(244,248,250)] h-[80px] w-[80px] rounded-sm"></div>
                <div class="list-product-text w-[55%] md:w-[335px] flex flex-col pl-[15px]">
                    <div class="list-product-h1 flex justify-between">
                        <div class="text-[15px] text-[#153a5b] font-bold leading-[1.6]">${title}</div>
                        <button title="Delete Item" class="delete-btn h-[12px] w-[12px] mt-[4px]" type="button">
                            <svg viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg" role="img">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1h3a1 1 0 1 1 0 2h-.544l-.37 8.136A3 3 0 0 1 10.089 16H4.91a3 3 0 0 1-2.997-2.864L1.544 5H1a1 1 0 0 1 0-2h3V2Zm2 1h3V2H6v1ZM3.546 5l.366 8.045a1 1 0 0 0 1 .955h5.177a1 1 0 0 0 .999-.955L11.454 5H3.545Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="list-product-h2 text-[#757575] text-[13px]">Insulated | ${size}</div>
                    <div class="counter-price flex justify-between mt-[5px]">
                        <div class="counter h-[30px] w-[100px] tracking-[1px] rounded-xl border-[1px] bg-slate-400 flex overflow-hidden">
                            <button id="remove-item" class="bg-white border-l-[1px] w-[35px] h-[100%] flex justify-center items-center">
                                <svg width="10px" height="10px" viewBox="0 0 10 2" xmlns="http://www.w3.org/2000/svg" role="img">
                                    <path d="M9.286 0H.714C.313 0 0 .313 0 .667v.667C0 1.709.313 2 .714 2h8.572c.38 0 .714-.292.714-.667V.667C10 .313 9.666 0 9.286 0z"></path>
                                </svg>
                            </button>
                            <div id="item-count" class="bg-white border-x-[1px] w-[35px] h-[100%] flex items-center justify-center text-heading-blue-0 text-[10px] font-bold">1</div>
                            <button id="add-item" class="bg-white border-l-[1px] w-[35px] h-[100%] flex justify-center items-center">
                                <svg width="10px" height="10px" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" role="img">
                                    <path d="M9.286 3.929H6.072V.714A.734.734 0 005.357 0h-.714a.72.72 0 00-.714.714V3.93H.714A.72.72 0 000 4.643v.714c0 .402.313.715.714.715H3.93v3.214c0 .402.312.714.714.714h.714a.72.72 0 00.715-.714V6.072h3.214A.72.72 0 0010 5.357v-.714a.734.734 0 00-.714-.714z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="price text-[15px] text-[#153a5b] font-bold leading-[1.6]">${price}</div>
                    </div>
                </div>
            </div>`;

            // Increasing subtotal
            subtotalDiv = document.getElementById('subtotal-cost');
            let totalCost = Number(subtotalDiv.innerText.slice(1)) + Number(price.slice(1));
            subtotalDiv.innerText = `$${totalCost}`
        }
    });
    let productList = document.getElementById('product-list');

    // Delete Button
    const dltBtns = [...document.getElementsByClassName('delete-btn')];
    dltBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.parentElement.style.display = "none";
            let mainChildren = [...productList.children];
            let count = 0;
            mainChildren.forEach(child => {
                if (child.style.display == "none"){
                    count += 1;
                }
            });
            if (count == (mainChildren.length)) {
                document.getElementById('default-message').style.display = "block";
                document.getElementById('subtotal-cost').innerText = `$0`
            }
            let cartCount = Number(cartIndicator.innerText);
            let counterNum = Number(btn.parentElement.parentElement.parentElement.children[1].children[2].children[0].children[1].innerText)
            cartCount = cartCount - counterNum;
            cartIndicator.innerText = cartCount;
            cartNumberLoader();

            // Decreasing Subtotal
            subtotalDiv = document.getElementById('subtotal-cost');
            const productDiv1 = btn.parentElement.parentElement.parentElement;
            let itemCount = Number(productDiv1.querySelector('#item-count').innerText);
            let indivPrice = (Number(price.slice(1)));
            let subtotalInit = Number(subtotalDiv.innerText.slice(1));
            let totalCost = subtotalInit - ((indivPrice) * (itemCount));
            subtotalDiv.innerText = `$${totalCost}`
            if (totalCost < 0) {
                subtotalDiv.innerText = `$0`
            }
            else {
                subtotalDiv.innerText = `$${totalCost}`
            }
        })
    });

    // Adding and removing similar products
    let counterParents = [...document.getElementsByClassName('counter')];
    counterParents.forEach(e => {
        let itemCount = 1;
        let removeButton = e.children[0];
        let addButton = e.children[2];
        let itemCountDiv = e.children[1];
        const initPrice = Number(e.nextElementSibling.innerText.slice(1));
        removeButton.addEventListener('click', () => {
            itemCount -= 1;
            if (itemCount <= 0 ){
                e.parentElement.parentElement.parentElement.style.display = "none";
                let mainChildren = [...productList.children];
                let count = 0;
                mainChildren.forEach(child => {
                    if (child.style.display == "none"){
                        count += 1;
                    }
                });
                if (count == mainChildren.length) {
                    document.getElementById('default-message').style.display = "block";
                    document.getElementById('subtotal-cost').innerText = `$0`
                }
            }
            else {
                itemCountDiv.innerText = itemCount;
            }

            // Cart Caclulation
            let cartNum = Number(cartIndicator.innerText);
            let counterNum = Number(e.parentElement.parentElement.parentElement.children[1].children[2].children[0].children[1].innerText)
            cartNum = cartNum - counterNum;
            cartIndicator.innerText = cartNum;
            cartNumberLoader();

            // Price Calculation
            if (itemCount >= 1) {
                const priceDiv = e.nextElementSibling;
                let finalPrice = initPrice * itemCount;
                priceDiv.innerText = `$${finalPrice}`;
            }
            
            //Subtotal Calculation
            subtotalDiv = document.getElementById('subtotal-cost');
            let indivPrice = (Number(price.slice(1)));
            let subtotalInit = Number(subtotalDiv.innerText.slice(1));
            let totalCost = subtotalInit - (indivPrice);
            subtotalDiv.innerText = `$${totalCost}`
            if (totalCost < 0) {
                subtotalDiv.innerText = `$0`
            }
            else {
                subtotalDiv.innerText = `$${totalCost}`
            }
        });
        addButton.addEventListener('click', () => {
            itemCount += 1;
            itemCountDiv.innerText = itemCount;

            // Cart Caclulation
            let cartNum = Number(cartIndicator.innerText);
            let counterNum = Number(e.parentElement.parentElement.parentElement.children[1].children[2].children[0].children[1].innerText)
            cartNum = cartNum + 1
            cartIndicator.innerText = cartNum;
            cartNumberLoader();

            // Price Calculation
            if (itemCount >= 1) {
                const priceDiv = e.nextElementSibling;
                let finalPrice = initPrice * itemCount;
                priceDiv.innerText = `$${finalPrice}`;
            }
            //Subtotal Calculation
            subtotalDiv = document.getElementById('subtotal-cost');
            let indivPrice = (Number(price.slice(1)));
            let subtotalInit = Number(subtotalDiv.innerText.slice(1));
            let totalCost = subtotalInit + (indivPrice);
            if (totalCost < 0) {
                subtotalDiv.innerText = `$0`
            }
            else {
                subtotalDiv.innerText = `$${totalCost}`
            }
        });
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