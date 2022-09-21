const login_nav = document.getElementById("login-btn");
const signup_nav = document.getElementById("signup-btn");

const login_span = document.getElementById("login-span");
const signup_span = document.getElementById("signup-span");

// login_nav.addEventListener("click", showLogin);

// fct to make the login div appear the signup div disappear
function showLogin(){
    const signin_div = document.getElementsByClassName("signin-div");
    const signup_div = document.getElementsByClassName("signup-form-div");
    signup_div[0].classList.add('no-display');
    signin_div[0].classList.remove('no-display');

}

//fct to make the sign-up appear and the login disappear
function showSignup(){
    const signin_div = document.getElementsByClassName("signin-div");
    const signup_div = document.getElementsByClassName("signup-form-div");
    signup_div[0].classList.remove('no-display');
    signin_div[0].classList.add('no-display');

}

login_nav.addEventListener("click", showLogin);
signup_nav.addEventListener("click", showSignup);

