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
