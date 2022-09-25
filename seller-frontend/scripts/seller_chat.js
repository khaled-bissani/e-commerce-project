const sendTo1 = document.getElementById('send-to1');
const messageId1 = document.querySelector('.message-id1');

const sendMessage1 = document.querySelector('.send-msg1');
const receiveMessage1 = document.querySelector('.receive-message1');

const sendBtn1 = document.querySelector('.send-btn1');
const receiveBtn1 = document.querySelector('.receive-btn1');
const refreshBtn1 = document.querySelector('.refresh-btn1');

refreshBtn1.onclick = function(){
    const refresh = new FormData();
    refresh.append('name',sendTo1.value);
    console.log(refresh)
    axios.post('https://localhost/ecommerce-server/get_client_id.php',refresh)
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        console.log(res.data)
                        localStorage.setItem('client_id',res.data[i].id)
                        messageId1.innerHTML = `
                        <div class="message-id1">
                            <label>ID</label>
                            <textarea>${res.data[i].id}</textarea>
                        </div>`
                    }
})
}

function sendToClient(){
    const sender1 = new FormData();
    sender1.append('message',sendMessage1.value);
    sender1.append('sender',localStorage.getItem('currentSellerId'));
    sender1.append('receiver',localStorage.getItem('client_id'));
    axios.post('http://localhost/ecommerce-server/send_chat.php',sender1)
        .then(res => console.log(res))
        .catch(err =>console.log(err));
}

function receiveFromClient(){
    const receive = new FormData();
    receive.append('sender',localStorage.getItem('client_id'));
    receive.append('receiver',localStorage.getItem('currentSellerId'));
    axios.post('http://localhost/ecommerce-server/receive_chat.php',receive)
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        receiveMessage1.innerHTML=`
                        <div class="receive-message1">
                            <label>Receive message</label>
                            <textarea>${res.data[i].message}</textarea>
                        </div>`
                    }
                })
}


sendBtn1.addEventListener('click',sendToClient);
receiveBtn1.addEventListener('click',receiveFromClient);