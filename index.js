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


var products = [
    { img: "./IMAGES/p.jpg" },
    { img: "./IMAGES/pro4.png" },
    { img: "./IMAGES/pg.jpg" },
    { img: "./IMAGES/pro2.png" },
    { img: "./IMAGES/pro1.png" },
    { img: "./IMAGES/pg1.jpg" },
    { img: "./IMAGES/pro3.png" },
    { img: "./IMAGES/pg2.jpg" },
];

const cardContainer = document.querySelector('.port2'); 
if (cardContainer) { 
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<img src="${product.img}" alt="ProductPics" class="card_img">`;
        cardContainer.appendChild(card);
    });
}
