//connect HTML tag
const number_client=document.querySelector('#numberclient');

//get number of client
axios.get('http://localhost/e-commerce-project/ecommerce-server/admin-backend/number_client.php').then((response) => {
  console.log('api',response.data.number_of_client);
  number_client.innerHTML=response.data.number_of_client;
  }).catch((error)=> {
      console.log('rejected',err);
  })