const login_nav = document.getElementById("login-btn");
const signup_nav = document.getElementById("signup-btn");

const login_span = document.getElementById("login-span");
const signup_span = document.getElementById("signup-span");

login_nav.addEventListener("click", showLogin);

function showLogin(){
    const signin_div = document.getElementsByClassName("signin-div");
    const signup_div = document.getElementsByClassName("signup-form-div");
    signup_div[0].style.display = "none";
    console.log(signin_div);
    console.log(signup_div);
}

