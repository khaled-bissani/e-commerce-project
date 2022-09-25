const sellerContainer = document.querySelector('.seller-container');

const refreshBtn = document.querySelector('.refresh');
const sendTo = document.getElementById('send-to');
const messageId = document.querySelector('.message-id');

const sendMessage = document.querySelector('.send-msg');
const receiveMessage = document.querySelector('.receive-message');

const sendBtn = document.querySelector('.send-btn');
const receiveBtn = document.querySelector('.receive-btn');

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
    const send = new FormData();
    send.append('name',sendTo.value);
    axios.post('http://localhost/ecommerce-server/get_seller_id.php',send)
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        localStorage.setItem('seller_id',res.data[i].id)
                        messageId.innerHTML = `
                        <div class="message-id">
                            <label>ID</label>
                            <textarea>${res.data[i].id}</textarea>
                        </div>`
                    }
})
}

function sendToSeller(){
    const sender1 = new FormData();
    sender1.append('message',sendMessage.value);
    sender1.append('sender',localStorage.getItem('currentUserId'));
    sender1.append('receiver',localStorage.getItem('seller_id'));
    axios.post('http://localhost/ecommerce-server/send_chat.php',sender1)
        .then(res => console.log(res))
        .catch(err =>console.log(err));
}

function receiveFromSeller(){
    const receive = new FormData();
    receive.append('sender',localStorage.getItem('seller_id'));
    receive.append('receiver',localStorage.getItem('currentUserId'));
    axios.post('http://localhost/ecommerce-server/receive_chat.php',receive)
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        receiveMessage.innerHTML=`
                        <div class="receive-message">
                            <label>Receive message</label>
                            <textarea>${res.data[i].message}</textarea>
                        </div>`
                    }
                })
}


sendBtn.addEventListener('click',sendToSeller);
receiveBtn.addEventListener('click',receiveFromSeller);