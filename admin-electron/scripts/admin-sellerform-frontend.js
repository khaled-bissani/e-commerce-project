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

console.log('nnn'+seller_email.value);

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

//create a new row
for(let i=0;i<15;i++){ 
    let tempalte=`
    <tr>
        <td><img class='table-image' src=''></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`;

    table_seller.innerHTML+=tempalte;
}

//get the ID of each client by clicking on the row
for(var i=1; i < table_seller.rows.length; i++){
    table_seller.rows[i].onclick = function(){
        seller_id.value=this.cells[1].innerHTML;
        open_edit.disabled=false;
        open_edit.classList.remove('blur');
        delete_button.disabled=false;
        delete_button.classList.remove('blur');
    }
}

add.addEventListener('click',()=>{
    if(seller_name.value == '' || seller_username.value == '' || seller_email.value == ''){
        error_add.innerText='Please enter correct information!';
    }
    else{
        location.reload();
    }

})

edit.addEventListener('click',()=>{
    if(edit_name.value == '' || edit_email.value == ''){
        error_edit.innerText='Please enter correct information!';
    }
    else{
        location.reload();
    }
})