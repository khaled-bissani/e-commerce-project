//connect to HTMl tags
const main=document.querySelector('#main');
const open_add=document.querySelector('#open-add');
const close_add=document.querySelector('#close-add');
const add_seller=document.querySelector('#add-seller');


open_add.addEventListener('click',()=>{
    add_seller.style.display='block';
    main.classList.add('disable');    
})

close_add.addEventListener('click',()=>{
    add_seller.style.display='none';
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


