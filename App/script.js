/* =================================
   ShopEase Demo Application
================================= */


/* =================================
   Product Data
================================= */

const products = [

    {
        id: 1,
        name: "Wireless Mouse",
        price: 799
    },

    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 2499
    },

    {
        id: 3,
        name: "USB-C Hub",
        price: 1299
    },

    {
        id: 4,
        name: "Laptop Stand",
        price: 1699
    },

    {
        id: 5,
        name: "Webcam",
        price: 2199
    },

    {
        id: 6,
        name: "Headphones",
        price: 1899
    }

];


/* =================================
   Cart
================================= */

let cart = [];


/* =================================
   Render Products
================================= */

function renderProducts(productList = products) {

    const productGrid =
        document.getElementById("productGrid");


    if (productList.length === 0) {

        productGrid.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    productGrid.innerHTML =
        productList.map(product => {

            return `

                <article class="product-card">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-price">
                        ₹${product.price}
                    </p>

                    <button
                        class="primary-button"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </article>

            `;

        }).join("");

}


/* =================================
   Add Product To Cart
================================= */

function addToCart(productId) {

    const existingItem =
        cart.find(item =>
            item.id === productId
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        const product =
            products.find(item =>
                item.id === productId
            );


        cart.push({

            ...product,

            quantity: 1

        });

    }


    renderCart();

}


/* =================================
   Render Cart
================================= */

function renderCart() {

    const cartCount =
        document.getElementById("cartCount");


    const cartItems =
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cartTotal");


    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        totalItems;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    cartItems.innerHTML =

        cart.map(item => {

            return `

                <div class="cart-row">

                    <span>
                        ${item.name}
                    </span>

                    <input
                        class="quantity-input"
                        type="number"
                        min="0"
                        value="${item.quantity}"
                        onchange="
                            updateQuantity(
                                ${item.id},
                                this.value
                            )
                        "
                    >

                    <span>
                        ₹${item.price * item.quantity}
                    </span>

                </div>

            `;

        }).join("");


    const total =
        cart.reduce(

            (sum, item) =>

                sum +
                item.price *
                item.quantity,

            0

        );


    cartTotal.textContent = total;

}


/* =================================
   Update Cart Quantity
================================= */

function updateQuantity(
    productId,
    quantity
) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) {
        return;
    }


    /*
     * Intentional QA defect:
     *
     * The application does not properly
     * validate the quantity value.
     *
     * This is useful for manual testing.
     */

    item.quantity =
        parseInt(quantity);


    renderCart();

}


/* =================================
   Product Search
================================= */

const searchInput =
    document.getElementById("search");


searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            searchInput.value
                .trim()
                .toLowerCase();


        const filteredProducts =
            products.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(searchText)

            );


        renderProducts(
            filteredProducts
        );

    }
);


/* =================================
   Login
================================= */

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value;


        const loginMessage =
            document.getElementById("loginMsg");


        /*
         * Demo credentials:
         *
         * Email:
         * qa@example.com
         *
         * Password:
         * Test@123
         */


        /*
         * INTENTIONAL BUG #1
         *
         * The password is not correctly
         * validated when the email is valid.
         *
         * QA tester should identify this.
         */

        if (
            email === "qa@example.com" ||
            password === "Test@123"
        ) {

            loginMessage.textContent =
                "Login successful.";

            loginMessage.className =
                "message success";

        } else {

            loginMessage.textContent =
                "Invalid email or password.";

            loginMessage.className =
                "message error";

        }

    }
);


/* =================================
   Cart Open / Close
================================= */

const cartButton =
    document.getElementById("cartBtn");


const cartPanel =
    document.getElementById("cartPanel");


const closeCart =
    document.getElementById("closeCart");


cartButton.addEventListener(
    "click",
    function () {

        cartPanel.classList.add(
            "open"
        );

    }
);


closeCart.addEventListener(
    "click",
    function () {

        cartPanel.classList.remove(
            "open"
        );

    }
);


/* =================================
   Checkout
================================= */

const checkoutButton =
    document.getElementById("checkout");


checkoutButton.addEventListener(
    "click",
    function () {

        const checkoutMessage =
            document.getElementById(
                "checkoutMsg"
            );


        if (cart.length === 0) {

            checkoutMessage.textContent =
                "Cart is empty.";

            checkoutMessage.className =
                "message error";

            return;
        }


        /*
         * INTENTIONAL QA DEFECT #2
         *
         * Invalid quantity values can
         * affect the total incorrectly.
         */


        checkoutMessage.textContent =
            "Order placed successfully.";

        checkoutMessage.className =
            "message success";

    }
);


/* =================================
   Initial Application Load
================================= */

renderProducts();

renderCart();