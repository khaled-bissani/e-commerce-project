//getting the login clickable parts
const login_nav = document.getElementById("login-btn");
const login_span = document.getElementById("login-span");

//getting signup clickable parts
const signup_nav = document.getElementById("signup-btn");
const signup_span = document.getElementById("signup-span");


const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");


// regex to check email format
let emailFormat=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//regex to check phone format
let numberFormat=/^\+9613[0-9]{0,6}|\+9617[0-9]{0,7}/;

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

//fct to check signup and make sure all the input values are valid


//calling the fct showLogin() every time a login button is clicked
login_nav.addEventListener("click", showLogin);
login_span.addEventListener("click", showLogin);

//calling the fct showSignup() everytime the sign up button is clicked
signup_nav.addEventListener("click", showSignup);
signup_span.addEventListener("click", showSignup);




