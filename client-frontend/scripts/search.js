// console.log(localStorage.getItem('currentUserId'))
// console.log(typeof(localStorage.getItem('currentProductId')))
const searchBtn = document.getElementById('search-btn')
const searchField = document.getElementById('home-search-btn')
const searchContainer = document.querySelector('.searchpopup')
// Display the search popup on click
const openSearchPopup = document.getElementById('open-search')
const searchPopup = document.getElementById('search-popup')
const closeSearch = document.getElementById('close-search')

openSearchPopup.onclick = function() {
    searchPopup.style.display = "block";
    cartPopup.style.display = "none";
    voucherPopup.style.display = "none";
}
closeSearch.onclick = function() {
    searchPopup.style.display = "none";
}

function searchItem() {
    // Taking the value of the search input field
    const search = new FormData();
    search.append('searched_item',searchField.value);
    axios.post('http://localhost/ecommerce-server/search_item.php',search)
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        searchContainer.innerHTML += `
                        <div class="search-card">
                            <p>${res.data[i].name}</p>
                            <p>${res.data[i].price}</p>
                        </div>`
                    }                     
    })

}

searchBtn.addEventListener('click', searchItem)



