//getting the login clickable parts
const login_nav = document.getElementById("login-btn");
const login_span = document.getElementById("login-span");

//getting signup clickable parts
const signup_nav = document.getElementById("signup-btn");
const signup_span = document.getElementById("signup-span");

//getting elements from the sign in form
const fname = document.getElementById("fname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const signup_btn = document.getElementById("signup-form-btn");

//getting elements from the login form
const login_username = document.getElementById("username-signin");
const login_password = document.getElementById("password-signin");
//getting the login button in the login form
const login_btn = document.getElementById("login-form-btn");

// regex to check email format
let emailFormat=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
function checkSignup(){
    if (fname.value == '') {
        fname.style.borderColor = "red"; 
        fname.style.borderWidth = "3px";
        fname.placeholder = "please enter a name!!";
    }
    if (username.value == '') {
        username.style.borderColor = "red"; 
        username.style.borderWidth = "3px";
        username.placeholder = "please enter a username!!";
    }
    if (password.value == '') {
        password.style.borderColor = "red"; 
        password.style.borderWidth = "3px";
        password.placeholder = "please enter a password!!";
    }
    if (confirmpassword.value == ''){
        confirmpassword.style.borderColor = "red"; 
        confirmpassword.style.borderWidth = "3px";
        confirmpassword.placeholder = "please confirm your password!!";
    }
    if (email.value == '') {
        email.style.borderColor = "red"; 
        email.style.borderWidth = "3px";
        email.placeholder = "please enter an email!!";
    }
    else if(!emailFormat.test(email.value)){
        email.style.borderColor = "red"; 
        email.style.borderWidth = "3px";
        email.value = '';
        email.placeholder = "please enter a valid email!!";
    }
    else if(password.value != confirmpassword.value){
        confirmpassword.style.borderColor = "red"; 
        confirmpassword.style.borderWidth = "3px";
        confirmpassword.value = '';
        password.value = '';
        password.placeholder = "try again!";
        confirmpassword.placeholder = "your password entries do not match!";
    }

    else{
        localStorage.setItem("fullname",fname.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        
        fname.value = '';
        username.value = '';
        password.value = '';
        confirmpassword.value = ''
        email.value = '';
        console.log('success');
        // console.log(localStorage.getItem('fullname'));
    }
}

//fct 
function checkLogin(){

}

//calling the fct showLogin() every time a login button is clicked
login_nav.addEventListener("click", showLogin);
login_span.addEventListener("click", showLogin);

//calling the fct showSignup() everytime the sign up button is clicked
signup_nav.addEventListener("click", showSignup);
signup_span.addEventListener("click", showSignup);

signup_btn.addEventListener("click", checkSignup);


