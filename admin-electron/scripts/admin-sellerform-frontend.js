//connect to HTMl tags
const main=document.querySelector('#main');
const open_add=document.querySelector('#open-add');
const close_add=document.querySelector('#close-add');
const open_edit=document.querySelector('#open-edit');
const close_edit=document.querySelector('#close-edit');
const add_seller=document.querySelector('#add-seller');
const edit_seller=document.querySelector('#edit-seller');

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
})

//close addseller form
close_edit.addEventListener('click',()=>{
    edit_seller.style.display='none';
    main.classList.remove('disable');
})


//connect the table
const table_seller=document.querySelector('#table-seller');

//create a new row
for(let i=0;i<5;i++){ 
    let tempalte=`
    <tr>
        <td><img class='table-image' src=''></td>
        <td><p class='table-info'></p></td>
        <td><p class='table-info'></p></td>
        <td><p class='table-info'></p></td>
        <td><p class='table-info'></p></td>
    </tr>`;

    table_seller.innerHTML+=tempalte;
}


