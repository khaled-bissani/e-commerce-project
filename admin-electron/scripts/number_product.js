// connect HTML tag
const number_product=document.querySelector('#numberproduct');

//get number of product
axios.get('http://localhost/e-commerce-project/ecommerce-server/admin-backend/number_product.php').then((response) => {
  console.log('api',response.data.number_of_product);
  number_product.innerHTML=response.data.number_of_product;
  }).catch((error)=> {
      console.log('rejected',err);
  })
