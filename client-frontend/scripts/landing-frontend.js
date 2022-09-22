//getting the login clickable parts
const login_nav = document.getElementById("login-btn");
const login_span = document.getElementById("login-span");

//getting signup clickable parts
const signup_nav = document.getElementById("signup-btn");
const signup_span = document.getElementById("signup-span");


const fname = document.getElementById("fname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const signup_btn = document.getElementById("signup-form-btn");


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
    if ((fname.value != '') && (email.value != '' && emailFormat.test(email.value)) && (username.value != '')  && (password.value != '') && (confirmpassword.value != '' && confirmpassword.value == password.value)){
        localStorage.setItem("fullname",fname.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        
        console.log('success');
        // console.log(localStorage.getItem('fullname'));
    }
    else if (fname.value == '') {
        fname.style.borderColor = "red"; 
        fname.placeholder = "please enter a name!!";
    }
    else if (username.value == '') {
        username.style.borderColor = "red"; 
        username.placeholder = "please enter a username!!";
    }
    // else if (password.value == '') {
    //     password.style.borderColor = "red"; 
    //     password.placeholder = "please enter a password!!";
        
    // }

    // else if (email.value == '') {
    //     email.style.borderColor = "red"; 
    //     email.placeholder = "please enter an email!!";
    // }

}

//calling the fct showLogin() every time a login button is clicked
login_nav.addEventListener("click", showLogin);
login_span.addEventListener("click", showLogin);

//calling the fct showSignup() everytime the sign up button is clicked
signup_nav.addEventListener("click", showSignup);
signup_span.addEventListener("click", showSignup);

signup_btn.addEventListener("click", checkSignup);


