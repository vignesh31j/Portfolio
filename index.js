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

// let deleteContent = document.getElementsByClassName('card');
//     while(deleteContent.length > 0){
//         deleteContent[0].remove();
//     }

//Product display function

let deleteContent = document.getElementsByClassName('card');

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
        while(deleteContent.length > 0){
                    deleteContent[0].remove();
                }
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
        while(deleteContent.length > 0){
            deleteContent[0].remove();
        }
        var ps = [
            { img: "./IMAGES/p.jpg", url:"./IMAGES/p.jpg" },
            { img: "./IMAGES/pg.jpg", url:"./IMAGES/pg.jpg" },
            { img: "./IMAGES/pg5.jpg", url:"./IMAGES/pg5.jpg" },
            { img: "./IMAGES/pg9.jpg", url:"./IMAGES/pg9.jpg" },
            { img: "./IMAGES/pg11.jpg", url:"./IMAGES/pg11.jpg" },
            { img: "./IMAGES/p3.jpg", url:"./IMAGES/p3.jpg" },
            { img: "./IMAGES/pg1.jpg", url:"./IMAGES/pg1.jpg" },
            { img: "./IMAGES/pg2.jpg", url:"./IMAGES/pg2.jpg" }
        ];
        
        if (cardContainer) { 
            ps.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = ` <a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"></a>`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

const fm_btn = document.querySelector('#FM');
fm_btn.addEventListener('click',() =>{
    setTimeout(() =>{
        while(deleteContent.length > 0){
            deleteContent[0].remove();
        }
        var products = [
            { img: "./IMAGES/pro4.png",url:"https://vignesh31j.github.io/Profilecard/" },
            { img: "./IMAGES/pro5.png",url:"https://vignesh31j.github.io/productcard/" },
            { img: "./IMAGES/pro7.png",url:"https://vignesh31j.github.io/blogpreview/" },
            { img: "./IMAGES/pro2.png",url:"https://vignesh31j.github.io/productcard/" },
            { img: "./IMAGES/pro1.png",url:"https://vignesh31j.github.io/blogpreview/" },
            { img: "./IMAGES/pro8.png",url:"https://vignesh31j.github.io/productcard/" },
            { img: "./IMAGES/pro10.png",url:"https://vignesh31j.github.io/blogpreview/" },
            { img: "./IMAGES/pro3.png",url:"https://vignesh31j.github.io/previewcard/" }
        ];

        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = ` <a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"></a>`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

const wd_btn = document.querySelector('#WD');
wd_btn.addEventListener('click',() =>{
    setTimeout(() =>{
        while(deleteContent.length > 0){
            deleteContent[0].remove();
        }
        var products = [
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" }
        ];

        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = ` <a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"></a>`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

const gd_btn = document.querySelector('#GD');
gd_btn.addEventListener('click',() =>{
    setTimeout(() =>{
        while(deleteContent.length > 0){
            deleteContent[0].remove();
        }
        var products = [
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" },
            { img: "", url:"" }
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