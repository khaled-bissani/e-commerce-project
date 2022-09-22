//connect the HTML tags
const table=document.querySelector('#table');
const client_id=document.querySelector('#client-id');
const ban=document.querySelector('#ban');

//create a new row
for(let i=0;i<8;i++){ 
    let tempalte=`
    <tr>
        <td><img class='table-image' src=''></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`;

    table.innerHTML+=tempalte;
}

//get the ID of each client by clicking on the row
for(var i=1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
        client_id.value=this.cells[1].innerHTML;
        ban.disabled=false;
        ban.classList.remove('blur');
    }
}


