console.log(localStorage.getItem('currentUserId'))
const sellerContainer = document.querySelector('.seller-container')

const refreshBtn = document.querySelector('.refresh');

const chatPopup = document.getElementById('chat-popup');
const chatBtn = document.getElementById('chat-btn');
const closeChat = document.getElementById('close-chat');

chatBtn.onclick = function() {
    chatPopup.style.display = "block";
    searchPopup.style.display = "none";
    voucherPopup.style.display = "none";
    cartPopup.style.display = "none";
}
closeChat.onclick = function() {
    chatPopup.style.display = "none";
}

refreshBtn.onclick = function(){
    axios.post('http://localhost/ecommerce-server/get_all_seller.php')
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        // localStorage.setItem('sellerChoosed' , res.data[i].id)
                        sellerContainer.innerHTML+= `
                        <div class="chat-card">
                            <button>${res.data[i].name}</button>
                        </div>`
                    }
})
}
