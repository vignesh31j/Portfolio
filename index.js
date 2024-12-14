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