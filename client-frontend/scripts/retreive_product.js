const itemContainer = document.getElementById('item-container');
window.onload = function() {

    axios.post('http://localhost/ecommerce-server/retreive_product.php')
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        itemContainer.innerHTML+= `
                        <div id="item" class="items">
                            <div class="item-image">
                                <img src="${res.data[i].image}" />
                            </div>
                            <div class="item-information">
                                <p>${res.data[i].name}</p>
                                <p>${res.data[i].price}</p>
                            </div>
                            <div class="item-option">
                                <i class="fa fa-cart-plus"></i>
                                <i class="favorite-btn fa fa-star"></i>
                                <i class="fa fa-list-alt"></i>
                            </div>`
                    }
                })
}