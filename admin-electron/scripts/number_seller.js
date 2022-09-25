// connect HTML tag
const number_seller=document.querySelector('#numberseller');

//get number of seller
axios.get('http://localhost/ecommerce-server/admin-backend/number_seller.php').then((response) => {
  console.log('api',response.data.number_of_seller);
  number_seller.innerHTML=response.data.number_of_seller;
  }).catch((error)=> {
      console.log('rejected',error);
  })