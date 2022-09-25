//connect to HTMl tags
const main=document.querySelector('#main');
const open_add=document.querySelector('#open-add');
const close_add=document.querySelector('#close-add');
const open_edit=document.querySelector('#open-edit');
const close_edit=document.querySelector('#close-edit');
const add_seller=document.querySelector('#add-seller');
const edit_seller=document.querySelector('#edit-seller');

const seller_id=document.querySelector('#seller-id');
const add=document.querySelector('#add');
const edit=document.querySelector('#edit');
const delete_button=document.querySelector('#delete');

const seller_name=document.querySelector('#sellername');
const seller_username=document.querySelector('#sellerusername');
const seller_email=document.querySelector('#selleremail');

const edit_name=document.querySelector('#editname');
const edit_email=document.querySelector('#editemail');

const title=document.querySelector('#seller-title');

const error_add=document.querySelector('#error-add');
const error_edit=document.querySelector('#error-edit');


//open addseller form
open_add.addEventListener('click',()=>{
    add_seller.style.display='block';
    main.classList.add('disable');    
})

//close addseller form
close_add.addEventListener('click',()=>{
    add_seller.style.display='none';
    main.classList.remove('disable');
})

//open editseller form
open_edit.addEventListener('click',()=>{
    edit_seller.style.display='block';
    main.classList.add('disable');
    title.innerText=`Edit Seller ${seller_id.value}`;
})

//close addseller form
close_edit.addEventListener('click',()=>{
    edit_seller.style.display='none';
    main.classList.remove('disable');
})


//connect the table
const table_seller=document.querySelector('#table-seller');

axios.get('http://localhost/ecommerce-server/admin-backend/get_seller.php').then((response) => {
    add_table(response.data);
    console.log(response.data);
}).catch((error)=> {
    console.log('rejected',error);
});

  
  add_table=(data)=>{
    for(var n=0;n<data.length;n++){
        let tempalte=`
    <tr>
        <td><img class='table-image' src='${data[n].profile_picture}'></td>
        <td>${data[n].id}</td>
        <td>${data[n].name}</td>
        <td>${data[n].email}</td>
        <td>${data[n].phone_number}</td>
    </tr>`;
    table_seller.innerHTML+=tempalte;

    for(var i=0; i < table_seller.rows.length; i++){
            table_seller.rows[i].onclick = function(){
            seller_id.value=this.cells[1].innerHTML;
            open_edit.disabled=false;
            open_edit.classList.remove('blur');
            delete_button.disabled=false;
            delete_button.classList.remove('blur');
        }
      }
    }    
}

//add new seller
add.addEventListener('click',()=>{
    if(seller_name.value == '' || seller_username.value == '' || seller_email.value == ''){
        error_add.innerText='Please enter correct information!';
    }
    else{
        const formData = new FormData();
        formData.append('name',seller_name.value);
        formData.append('user_name',seller_username.value);
        formData.append('email',seller_email.value);
        axios.post('http://localhost/ecommerce-server/admin-backend/add_seller.php',formData)
        .then(res => console.log(res))
        .catch(err=>console.log(err));
        location.reload();
    }
})

//edit seller information
edit.addEventListener('click',()=>{
    if(edit_name.value == '' || edit_email.value == ''){
        error_edit.innerText='Please enter correct information!';
    }
    else{
        const formEdit = new FormData();
        formEdit.append('id',seller_id.value);
        formEdit.append('name',edit_name.value);
        formEdit.append('email',edit_email.value);
        console.log(formEdit.get('id'));
        axios.post('http://localhost/ecommerce-server/admin-backend/edit_seller.php',formEdit)
        .then(res => console.log(res))
        .catch(err=>console.log(err));
        location.reload();
    }
})


delete_button.addEventListener('click',()=>{
        const formDelete = new FormData();
        formDelete.append('user_id',seller_id.value);
        console.log(formDelete.get('user_id'));
        axios.post('http://localhost/ecommerce-server/admin-backend/delete_seller.php',formDelete)
        .then(res => console.log(res))
        .catch(err=>console.log(err));
        location.reload();
    })

