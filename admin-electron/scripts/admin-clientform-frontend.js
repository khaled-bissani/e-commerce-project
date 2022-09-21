//connect the table
const table=document.querySelector('#table');

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

    table.innerHTML+=tempalte;
}
