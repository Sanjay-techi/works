const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const limitedOffer = document.querySelector(".Limitedoffer")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./prj pic/air.png",
            },
            {
                code: "darkblue",
                img: "./prj pic/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./prj pic/jordan.png",
            },
            {
                code: "green",
                img: "./prj pic/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./prj pic/blazer.png",
            },
            {
                code: "green",
                img: "./prj pic/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./prj pic/crater.png",
            },
            {
                code: "lightgray",
                img: "./prj pic/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./prj pic/hippie.png",
            },
            {
                code: "black",
                img: "./prj pic/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        // to change the slider
        wrapper.style.transform = `translate(${-100 * index}vw)`;
        // to change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;



        });
    });
});

    //change color
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


//payment

const productButton = document.querySelector(".productbtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});



