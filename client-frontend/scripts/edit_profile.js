// Display the edit popup on click
const editPopup = document.getElementById('edit-popup');
const editBtn = document.getElementById('edit-btn');
const closeEdit = document.getElementById('close-edit');

const pName = document.getElementById('pname');
const pUsername = document.getElementById('pusername');
const pEmail = document.getElementById('pemail');
const pNumber = document.getElementById('pnumber');
const editProfile = document.querySelector('.edit-profile');

editBtn.onclick = function() {
    editPopup.style.display = "block";
}
closeEdit.onclick = function() {
    editPopup.style.display = "none";
}

function edit(){
    const editP = new FormData();
    editP.append('currentuser',localStorage.getItem('currentUserId'));
    editP.append('fname',pName.value);
    editP.append("username", pUsername.value);
    editP.append("email", pEmail.value);
    editP.append("phone", pNumber.value);
    axios.post('http://localhost/ecommerce-server/edit_profile.php',editP)
    .then(res => console.log(res))
    .catch(err =>console.log(err));
}

editProfile.addEventListener('click', edit)