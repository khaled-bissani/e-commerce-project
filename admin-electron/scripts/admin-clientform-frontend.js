//connect the HTML tags
const table=document.querySelector('#table');
const client_id=document.querySelector('#client-id');
const ban=document.querySelector('#ban');


axios.get('http://localhost/ecommerce-server/admin-backend/get_client.php').then((response) => {
    table_client(response.data);
}).catch((error)=> {
    console.log('rejected',error);
})

  
  table_client=(data)=>{
    for(var n=0;n<data.length;n++){
        console.log(111);
        let tempalte=`
    <tr>
        <td><img class='table-image' src='${data[n].profile_picture}'></td>
        <td>${data[n].id}</td>
        <td>${data[n].name}</td>
        <td>${data[n].email}</td>
        <td>${data[n].phone_number}</td>
    </tr>`;
    table.innerHTML+=tempalte;

    for(var i=0; i < table.rows.length; i++){
            table.rows[i].onclick = function(){
            console.log(1);    
            client_id.value=this.cells[1].innerHTML;
            ban.disabled=false;
            ban.classList.remove('blur');
        }
      }
    }    
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
