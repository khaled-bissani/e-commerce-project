const addproduct=document.querySelector('#add-product');
const editproduct=document.querySelector('#edit-product');
const deleteproduct=document.querySelector('#delete-product');
const categoryproduct=document.querySelector('#category-product');

const addform=document.querySelector('#add-form');
const editform=document.querySelector('#edit-form');
const categoryform=document.querySelector('#category-form');

const closeadd=document.querySelector('#close-add');
const closeedit=document.querySelector('#close-edit');
const closecategory=document.querySelector('#close-category');

const main=document.querySelector('#main');
const table=document.querySelector('#table');

const product=document.querySelector('#product-id');
const edit=document.querySelector('#editid');

const productname=document.querySelector('#product-name');
const productprice=document.querySelector('#product-price');
const productcategory=document.querySelector('#product-category');
const image=document.querySelector('#image');

const editname=document.querySelector('#editname');
const editprice=document.querySelector('#editprice');

const add=document.querySelector('#add');
const edit_button=document.querySelector('#edit');

const error=document.querySelector('#error');

addproduct.addEventListener('click',()=>{
    addform.style.display='block';
    main.classList.add('blocked');
    main.classList.add('disabled');
})

closeadd.addEventListener('click',()=>{
    addform.style.display='none';
    main.classList.remove('blocked');
    main.classList.remove('disabled');
})

editproduct.addEventListener('click',()=>{
    editform.style.display='block';
    main.classList.add('blocked');
    main.classList.add('disabled');
})

closeedit.addEventListener('click',()=>{
    editform.style.display='none';
    main.classList.remove('blocked');
    main.classList.remove('disabled');
})

categoryproduct.addEventListener('click',()=>{
    categoryform.style.display='block';
    main.classList.add('blocked');
    main.classList.add('disabled');
})

closecategory.addEventListener('click',()=>{
    categoryform.style.display='none';
    main.classList.remove('blocked');
    main.classList.remove('disabled');
})

for(var i=0;i<10;i++){
    let template=`
        <tr>
            <td><img src=' ' class='image-product'></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>`;
        table.innerHTML+=template;
}


for(var i=0; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        product.value=this.cells[1].innerHTML;
        editproduct.disabled=false;
        editproduct.classList.remove('blocked');
        deleteproduct.disabled=false;
        deleteproduct.classList.remove('blocked');
    }
}

