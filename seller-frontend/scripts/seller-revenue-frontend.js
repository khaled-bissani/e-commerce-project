//get id from localstorage
const userID = localStorage.getItem('data');

//connect HTML tag
const title_revenue=document.querySelector('#total-revenue');
const week=document.querySelector('#value-week');
const month=document.querySelector('#value-month');
const year=document.querySelector('#value-year');

const revenue_product=document.querySelector('#revenue-product');


for(let i=0;i<5;i++){
    const template=`<div class="product-item">
    <h1 class="range-title"></h1>
    <p class="title-product"></p>
    <p class="title-product"></p>
    </div>`;

    revenue_product.innerHTML+=template;
}