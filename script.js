

let  cards = document.querySelectorAll(".card");
let trendFood = document.querySelectorAll(".trendFood .trends");
let foodCard = document.querySelectorAll(".foodcard");

let arrow = document.getElementById("arrow");
if (arrow) {
    arrow.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

let count = 0;

trendFood.forEach((imgs, index) => {
    imgs.style.left = `${index * 100}%`;
});

const myFun = () => {
    trendFood.forEach((curImg) => {
        curImg.style.transform = `translateX(-${count * 100}%)`;
    });
};

setInterval(() => {
    count++;
    if (count === trendFood.length) {
        count = 0;
    }
    myFun();
}, 2000);

foodCard.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
});

// -------------




// food Detail 

foodCard.forEach((curCard) => {
    curCard.addEventListener("click", function () {
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
       <h2>Food_item_name</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias, est excepturi inventore id minus! Aliquid at facilis quam a hic debitis?</p>`
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function () {
            div.remove();
        })
    })
})

function review(){
    alert("We will updating more reviews very soon...");
}
function book(){
    alert("Contact us for reservation or any other quaries..")
}

const bar = document.getElementById('bar');
const menu = document.querySelector('.menu-list');

bar.addEventListener('click', () => {
    menu.classList.toggle('show');
});
