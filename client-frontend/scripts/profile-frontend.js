const infoContainer = document.querySelector('.info');

window.onload= function(){
    const view = new FormData();
    view.append('id',localStorage.getItem('currentUserId'));
    axios.post('http://localhost/ecommerce-server/view_profile.php',view)
                .then(res => {
                    for(let i=0; i<res.data.length; i++){
                        infoContainer.innerHTML=`
                        <div class="profile-pic">
                            <img src="http://localhost/ecommerce-server/${res.data[i].profile_picture}"/>
                        </div>
                        <div class="info-tab flex flex-space-around">
                            <div class="fir-clm-info flex dir-column">
                                <p class="info-item1 flex">${res.data[i].name}</p>
                                <p class="info-item1 flex">${res.data[i].username}</p>
                                
                            </div>
                            <div class="fir-clm-info flex dir-column">
                                <p class="info-item1 flex">${res.data[i].email}</p>
                                <p class="info-item1 flex">${res.data[i].phone_number}</p>
                            </div>
                        </div>
                        `
                    }
                })
}

 
