let scrollinpx = window.scrollY;
let btn = document.getElementById("gototop");
btn.classList.add("invisible");
function myscrollfunction() {
  if (window.scrollY <= 500) {
    btn.classList.add("invisible");
  } else {
    btn.classList.remove("invisible");
  }
}

//LOCALSTORAGE SECTION
if (!JSON.parse(localStorage.getItem("storageavailable"))) {
  localStorage.setItem("storageavailable", "true");
  localStorage.setItem("isloggedin", false);
  localStorage.setItem("loggedinas", "");
}

// hiding and showing the signoutbutton
document.getElementById("isloggedin").classList.add("invisible");
document.getElementById("accountbtn").classList.add("invisible");

if (JSON.parse(localStorage.isloggedin)) {
  if (localStorage.loggedinas == "individual") {
    document.getElementById("isloggedin").classList.remove("invisible");
    document.getElementById("accountbtn").classList.remove("invisible");
    document.getElementById("requestbutton").classList.add("invisible");
    document.getElementById("tosignin").classList.add("invisible");
  }
  if (localStorage.loggedinas == "ngo") {
    document.getElementById("isloggedin").classList.remove("invisible");
    document.getElementById("accountbtn").classList.remove("invisible");
    document.getElementById("donatebtn").classList.add("invisible");
    document.getElementById("tosignin").classList.add("invisible");
  }
}

// buttonfunctions
let message = document.getElementsByClassName("message")[0];
let messagebg=document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");
let messagebtn = document.getElementById("messagebtn");
let messagecross = document.getElementById("messagecrossbtn");


function donateredirect() {
  if (JSON.parse(localStorage.isloggedin)) {
    window.location.replace("/HTML/donate.html");
  } else {
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please SignIn to access this feature!";
    // window.location.replace("/HTML/signin.html");
  }
}

function requestfordonationredirect() {
  if (JSON.parse(localStorage.isloggedin)) {
    window.location.replace("/HTML/requestfordonation.html");
  } else {
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please SignIn to access this feature!";
    // window.location.replace("/HTML/signin.html");
  }
}

function signout() {
    localStorage.isloggedin = false;
    localStorage.loggedinas = "";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    messagecross.classList.add("invisible");
    document.getElementById("msgimage").setAttribute("src","/IMAGES/check.png");
    document.getElementById("msgimage").style.marginTop="20px";
    document.getElementsByClassName("loginmessage")[0].textContent =
    "Signed Out successfully!";
    messagebtn.addEventListener("click",function(){
        window.location.replace("/HTML/index.html");
    })
}

function signup() {
  window.location.replace("/HTML/signin.html");
}

function account() {
  if (localStorage.loggedinas == "individual") {
    window.location.replace("/HTML/individualaccount.html");
  } else {
    window.location.replace("/HTML/ngoaccount.html");
  }
}
function messagecrossbtn(){
  message.classList.add('invisible');
  messagebg.classList.add('invisible');
}
