const sec_home = document.getElementById("home-section");
const sec_category = document.getElementById("category-section");
const sec_revenue = document.getElementById("revenue-section");

const btn_home = document.getElementById("home");
const btn_category = document.getElementById("category");
const btn_revenue = document.getElementById("revenue");

// view home-section
btn_home.addEventListener('click',()=>{
    sec_home.style.display='block';
    sec_category.style.display='none';
    sec_revenue.style.display='none';    
})

// view category-section
btn_category.addEventListener('click',()=>{
    sec_home.style.display='none';
    sec_category.style.display='block';
    sec_revenue.style.display='none';    
})

// view revenue-section
btn_revenue.addEventListener('click',()=>{
    sec_home.style.display='none';
    sec_category.style.display='none';
    sec_revenue.style.display='block';    
})