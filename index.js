// Role display function
let assign = [
    {h_b : "Web Designer"},
    {h_b : "Freelancer"},
    {h_b : "Web Developer"},
    {h_b : "Graphic Designer"},
    {h_b : "Photographer"},
    
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
    { img: "./IMAGES/p.jpg",url:"", description:"" },
    { img: "./IMAGES/pro4.png",url:"https://vignesh31j.github.io/Profilecard/", description:""},
    { img: "./IMAGES/pg.jpg",url:"", description:"" },
    { img: "./IMAGES/pro2.png",url:"https://vignesh31j.github.io/productcard/", description:"" },
    { img: "./IMAGES/pro1.png" ,url:"https://vignesh31j.github.io/blogpreview/", description:""},
    { img: "./IMAGES/pg1.jpg",url:"", description:"" },
    { img: "./IMAGES/pro3.png",url:"https://vignesh31j.github.io/previewcard/", description:"" },
    { img: "./IMAGES/pg2.jpg",url:"", description:"" }
];

if (cardContainer) { 
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"><p class="card-description">${product.description}</p></a>`;
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
            { img: "./IMAGES/p.jpg",url:"", description:"" },
            { img: "./IMAGES/pro4.png",url:"https://vignesh31j.github.io/Profilecard/", description:"" },
            { img: "./IMAGES/pg.jpg",url:"", description:"" },
            { img: "./IMAGES/pro2.png",url:"https://vignesh31j.github.io/productcard/", description:"" },
            { img: "./IMAGES/pro1.png",url:"https://vignesh31j.github.io/blogpreview/", description:"" },
            { img: "./IMAGES/pg1.jpg",url:"", description:"" },
            { img: "./IMAGES/pro3.png",url:"https://vignesh31j.github.io/previewcard/", description:"" },
            { img: "./IMAGES/pg2.jpg",url:"", description:"" }
        ];
        
        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"><p class="card-description">${product.description}</p></a>`;
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
            { img: "./IMAGES/p.jpg", url:"./IMAGES/p.jpg", description:"" },
            { img: "./IMAGES/pg.jpg", url:"./IMAGES/pg.jpg", description:"" },
            { img: "./IMAGES/pg5.jpg", url:"./IMAGES/pg5.jpg", description:"" },
            { img: "./IMAGES/pg9.jpg", url:"./IMAGES/pg9.jpg", description:"" },
            { img: "./IMAGES/pg11.jpg", url:"./IMAGES/pg11.jpg", description:"" },
            { img: "./IMAGES/p3.jpg", url:"./IMAGES/p3.jpg", description:"" },
            { img: "./IMAGES/pg1.jpg", url:"./IMAGES/pg1.jpg", description:"" },
            { img: "./IMAGES/pg2.jpg", url:"./IMAGES/pg2.jpg", description:"" }
        ];
        
        if (cardContainer) { 
            ps.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = ` <a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"><p class="card-description">${product.description}</p></a>`;
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
            { img: "./IMAGES/pro4.png",url:"https://vignesh31j.github.io/Profilecard/",description:"Profile Card"},
            { img: "./IMAGES/pro5.png",url:"https://vignesh31j.github.io/Order_Summery/",description:"Order Summary Card" },
            { img: "./IMAGES/pro7.png",url:"https://vignesh31j.github.io/NFT_Preview_Card/",description:"NFT Preview Card" },
            { img: "./IMAGES/pro2.png",url:"https://vignesh31j.github.io/productcard/",description:"Product Card" },
            { img: "./IMAGES/pro1.png",url:"https://vignesh31j.github.io/blogpreview/",description:"Blog Preview Card" },
            { img: "./IMAGES/pro8.png",url:"https://vignesh31j.github.io/OR_Code_Card/",description:"OR Code Card" },
            { img: "./IMAGES/pro10.png",url:"https://vignesh31j.github.io/Single_Price_Grid_Card/",description:"Single Price Grid Card" },
            { img: "./IMAGES/pro3.png",url:"https://vignesh31j.github.io/previewcard/",description:"Preview Card" }
        ];

        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<a href="${product.url}" target="_blank" class="card-a"><img src="${product.img}" alt="ProductPics" class="card_img"><p class="card-description">${product.description}</p></a>`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});

// const wd_btn = document.querySelector('#WD');
// wd_btn.addEventListener('click',() =>{
//     setTimeout(() =>{
//         while(deleteContent.length > 0){
//             deleteContent[0].remove();
//         }
//         var products = [
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" },
//             { img: "", url:"", description:"" }
//         ];

//         if (cardContainer) { 
//             products.forEach(product => {
//                 const card = document.createElement('div');
//                 card.className = "card";
//                 card.innerHTML = `<a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"><p class="card-description">${product.description}</p></a>`;
//                 cardContainer.appendChild(card);
//             });
//         }
//     },1000);
// });

const gd_btn = document.querySelector('#GD');
gd_btn.addEventListener('click',() =>{
    setTimeout(() =>{
        while(deleteContent.length > 0){
            deleteContent[0].remove();
        }
        var products = [
            { img: "./IMAGES/g1.png", url:"./IMAGES/GD.jpg", description:"" },
            { img: "./IMAGES/g.png", url:"./IMAGES/GD0.jpg", description:"" },
            { img: "./IMAGES/g11.png", url:"./IMAGES/g11.png", description:"" },
            { img: "./IMAGES/g10.png", url:"./IMAGES/g10.png", description:"" },
            { img: "./IMAGES/g13.png", url:"./IMAGES/g13.png", description:"" },
            { img: "./IMAGES/GD2.jpg", url:"./IMAGES/GD2.jpg", description:"" },
            { img: "./IMAGES/g2.png", url:"./IMAGES/g2.png", description:"" },
            { img: "./IMAGES/GD1.jpg", url:"./IMAGES/GD1.jpg", description:"" }
        ];

        if (cardContainer) { 
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<a href="${product.url}" target="_blank"><img src="${product.img}" alt="ProductPics" class="card_img"><p class="card-description">${product.description}</p></a>`;
                cardContainer.appendChild(card);
            });
        }
    },1000);
});