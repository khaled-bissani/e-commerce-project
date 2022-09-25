//get id from localstorage
const userID = localStorage.getItem('data');

//connect HTML tag
const total_revenue=document.querySelector('#total-revenue');
const week=document.querySelector('#value-week');
const month=document.querySelector('#value-month');
const year=document.querySelector('#value-year');

const revenue_product=document.querySelector('#revenue-product');

//getting total revenue
const revenueData = new FormData();
revenueData.append('id',userID);
axios.post('http://localhost/ecommerce-server/seller-backend/revenue.php',revenueData)
.then(res => 
total_revenue.innerHTML=`Total Revenue ${res.data.revenue}$`)
.catch(err=>console.log(err));

//getting week revenue
axios.post('http://localhost/ecommerce-server/seller-backend/revenue_week.php',revenueData)
.then(res => 
week.innerHTML=`${res.data.revenue}$`)
.catch(err=>console.log(err));

//getting month revenue
axios.post('http://localhost/ecommerce-server/seller-backend/revenue_month.php',revenueData)
.then(res => 
month.innerHTML=`${res.data.revenue}$`)
.catch(err=>console.log(err));

//getting year revenue
axios.post('http://localhost/ecommerce-server/seller-backend/revenue_year.php',revenueData)
.then(res => 
year.innerHTML=`${res.data.revenue}$`)
.catch(err=>console.log(err));


for(let i=0;i<5;i++){
    const template=`<div class="product-item">
    <h1 class="range-title"></h1>
    <p class="title-product"></p>
    <p class="title-product"></p>
    </div>`;

    revenue_product.innerHTML+=template;
}