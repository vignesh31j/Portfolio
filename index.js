// Role display function
let assign = [
    {h_b : "Web Developer"},
    {h_b : "Graphic Designer"},
    {h_b : "Photographer"},
    {h_b : "freelancer"},
];

let text = document.querySelector('#h-b');

let data=0;

function update(){
    let cur = assign[data];
    h_b.textContent = cur.h_b;
    data++;
    if(data===assign.length){
        data=0;
    }
}

setInterval(()=>{update()},4000);

update()

//Product display function
const cardContainer = document.querySelector('.port2'); 
var products = [
    { img: "./IMAGES/p.jpg" },
    { img: "./IMAGES/pro4.png" },
    { img: "./IMAGES/pg.jpg" },
    { img: "./IMAGES/pro2.png" },
    { img: "./IMAGES/pro1.png" },
    { img: "./IMAGES/pg1.jpg" },
    { img: "./IMAGES/pro3.png" },
    { img: "./IMAGES/pg2.jpg" }
];

if (cardContainer) { 
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<img src="${product.img}" alt="ProductPics" class="card_img">`;
        cardContainer.appendChild(card);
    });
}

const all_btn = document.querySelector('#all');
all_btn.addEventListener('click',() =>{

    setTimeout(() => {
        let products = [
            { img: "./IMAGES/p.jpg" },
            { img: "./IMAGES/pro4.png" },
            { img: "./IMAGES/pg.jpg" },
            { img: "./IMAGES/pro2.png" },
            { img: "./IMAGES/pro1.png" },
            { img: "./IMAGES/pg1.jpg" },
            { img: "./IMAGES/pro3.png" },
            { img: "./IMAGES/pg2.jpg" }
        ];
        
        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<img src="${product.img}" alt="ProductPics" class="card_img">`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

const ps_btn = document.querySelector('#PS');
ps_btn.addEventListener('click',() =>{

    setTimeout(() => {
        var ps = [
            { img: "./IMAGES/p.jpg" },
            { img: "./IMAGES/pg.jpg" },
            { img: "./IMAGES/pg1.jpg" },
            { img: "./IMAGES/pro3.png" }
        ];
        
        if (cardContainer) { 
            ps.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<img src="${product.img}" alt="ProductPics" class="card_img">`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

const wd_btn = document.querySelector('#WD');
wd_btn.addEventListener('click',() =>{
    setTimeout(() =>{
        var products = [
            { img: "./IMAGES/pro4.png" },
            { img: "./IMAGES/pro2.png" },
            { img: "./IMAGES/pro1.png" },
            { img: "./IMAGES/pro3.png" }
        ];

        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<img src="${product.img}" alt="ProductPics" class="card_img">`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

const gd_btn = document.querySelector('#GD');
gd_btn.addEventListener('click',() =>{
    setTimeout(() =>{
        var products = [
            { img: "./IMAGES/p.jpg" },
            { img: "./IMAGES/pro4.png" },
            { img: "./IMAGES/pg.jpg" },
            { img: "./IMAGES/pro2.png" }
        ];

        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<img src="${product.img}" alt="ProductPics" class="card_img">`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});