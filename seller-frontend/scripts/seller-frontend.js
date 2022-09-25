localStorage.setItem('data', 1);

var userInfo = localStorage.getItem('data');

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

const erroradd=document.querySelector('#error-add');
const erroredit=document.querySelector('#error-edit');

const showcategory=document.querySelector('#show-category');

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
    edit.innerText=`Edit product ${product.value}`;
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


    const getData = new FormData();
    getData.append('id',userInfo);
    axios.post('http://localhost/ecommerce-server/seller-backend/view_product.php',getData)
    .then(res => getProduct(res.data))
    .catch(err=>console.log(err));

    getProduct=(data)=>{

        for(var i=0;i<data.length;i++){
            let template=`
                <tr>
                    <td><img src='${data[i].image}' class='image-product'></td>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].price}$</td>
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
    }


const reader = new FileReader();
const formData = new FormData();

add.addEventListener("click", () => {
    //check if data is not empty
    if(productname.value == '' || productprice == '' || productcategory == '' || image.value == ''){
        erroradd.innerText='Please enter all information';
    }
    else{// convert image to base64 
        reader.addEventListener("load", () => {
        formData.append("image", reader.result);
        addProduct();
    });
        reader.readAsDataURL(image.files[0]);
    }
  });

    // add new product
    const addProduct = () => {
        console.log(productname.value);
        console.log(productprice.value);
        console.log(productcategory.value);

        formData.append('name',productname.value);
        formData.append('price',productprice.value);
        formData.append('category',productcategory.value);
        formData.append('id', userInfo);
        axios.post('http://localhost/ecommerce-server/seller-backend/add_product.php',formData)
        .then(res => console.log(res))
        .catch(err=>console.log(err));
        location.reload();
    }

edit_button.addEventListener('click',()=>{
    //check if data is empty
    if(editname.value == '' || editprice.value == ''){
        erroredit.innerText='Please enter all information';
    }
    else{
        //edit product
        const editData = new FormData();
        editData.append('id',product.value);
        editData.append('name',editname.value);
        editData.append('price',editprice.value);
        axios.post('http://localhost/ecommerce-server/seller-backend/edit_product.php',editData)
        .then(res => console.log(res))
        .catch(err=>console.log(err));
        location.reload();
    }
})

//delete product
deleteproduct.addEventListener('click',()=>{
    const deleteData = new FormData();
        deleteData.append('user_id',product.value);
        axios.post('http://localhost/ecommerce-server/seller-backend/delete_product.php',deleteData)
        .then(res => console.log(res))
        .catch(err=>console.log(err));
        location.reload();
})


axios.get('http://localhost/ecommerce-server/seller-backend/view_category.php').then((response) => {
  for(var p=0;p<response.data.length;p++){
    let form=`<p class="show-text">${response.data[p].id}. ${response.data[p].name}</p>`;
    showcategory.innerHTML+=form;
  }
  }).catch((error)=> {
      console.log('rejected',error);
  })
