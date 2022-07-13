const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
function handleBtnClick(){
    
    const username = loginInput.value;

    if(username === ""){
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long");
    }
    
   console.log(username);
}
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`; // `` 이거임 1옆에
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);
    paintGreetings(username);
}
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    paintGreetings(savedUsername);
}


//loginButton.addEventListener("click",handleBtnClick);
