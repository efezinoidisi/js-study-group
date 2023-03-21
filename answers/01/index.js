let article = document.getElementById("article");
let price = document.getElementById("price");

let list = document.getElementById("list");
let total = document.getElementById("total"); 
const content = document.getElementById("list");

const totalBtn = document.getElementById("calculateTotal");

const items = [];


totalBtn.onclick = ()=>{
    const elem = document.createElement('li');
    elem.innerHTML = `<span>${article.value}</span>  <span>$${price.value}</span>`
    items.push(Number(price.value));
    content.appendChild(elem);
    total.textContent = `Total: $${items.reduce((item, sum)=> sum+item,0)}`
}