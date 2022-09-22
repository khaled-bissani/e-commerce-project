// toggle through pages
const sec_home = document.getElementById("home-section");
const sec_category = document.getElementById("category-section");
const sec_revenue = document.getElementById("revenue-section");
const sec_discount = document.getElementById("discount-section");

const btn_home = document.getElementById("home");
const btn_category = document.getElementById("category");
const btn_revenue = document.getElementById("revenue");
const btn_discount = document.getElementById("discount");

// view home-section
btn_home.addEventListener('click',()=>{
    sec_home.style.display='block';
    sec_category.style.display='none';
    sec_revenue.style.display='none';   
    sec_discount.style.display='none';  
})

// view category-section
btn_category.addEventListener('click',()=>{
    sec_home.style.display='none';
    sec_category.style.display='block';
    sec_revenue.style.display='none'; 
    sec_discount.style.display='none';     
})

// view revenue-section
btn_revenue.addEventListener('click',()=>{
    sec_home.style.display='none';
    sec_category.style.display='none';
    sec_revenue.style.display='block';   
    sec_discount.style.display='none';   
})

// view discount-section
btn_discount.addEventListener('click',()=>{
    sec_home.style.display='none';
    sec_category.style.display='none';
    sec_revenue.style.display='none';   
    sec_discount.style.display='block';   
})

////////////////////////////////////////////////////
// pop up
const btn_add = document.getElementById("btn-add");
btn_add.addEventListener('click',()=>{
    document.getElementById("myForm").style.display = "block";
});

const btn_close = document.getElementById("btn-close");
btn_close.addEventListener('click',()=>{
    document.getElementById("myForm").style.display = "none";
});