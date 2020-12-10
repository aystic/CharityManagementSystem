document.querySelector("video").play();
document.querySelector("video").playbackRate = 2;

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      document.querySelector(".loader").classList.add("fadeloader");
    }, 2500);
    setInterval(() => {
      document.querySelector("body").classList.remove("invisible");
      document.querySelector(".loader").classList.add("invisible");
    }, 3000);
  } else {
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
  }
};
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
  localStorage.setItem("loggedinuser", "");
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
let messagebg = document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");
let messagebtn = document.getElementById("messagebtn");
let messagecross = document.getElementById("messagecrossbtn");

function donateredirect() {
  if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "true"
  ) {
    window.location.replace("/HTML/donate.html");
  } else if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "false"
  ) {
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please submit your details for verification first!";
    messagebtn.addEventListener("click", function () {
      window.location.replace("/HTML/individualindex.html");
    });
  } else {
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please SignIn to access this feature!";
    // window.location.replace("/HTML/signin.html");
  }
}

function requestfordonationredirect() {
  if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "true"
  ) {
    window.location.replace("/HTML/requestfordonation.html");
    // console.log("loggedin=true, detailssubmitted=true");
  } else if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "false"
  ) {
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please submit your details for verification first!";
    messagebtn.addEventListener("click", function () {
      // console.log("loggedin=true, detailssubmitted=false");
      window.location.replace("/HTML/ngoindex.html");
    });
  } else {
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please SignIn to access this feature!";
    // console.log("loggedin=false");

    // window.location.replace("/HTML/signin.html");
  }
}

function signout() {
  localStorage.isloggedin = false;
  localStorage.loggedinas = "";
  localStorage.loggedinuser = "";
  messagebg.classList.remove("invisible");
  message.classList.remove("invisible");
  messagecross.classList.add("invisible");
  document.getElementById("msgimage").setAttribute("src", "/IMAGES/check.png");
  document.getElementById("msgimage").style.marginTop = "20px";
  document.getElementsByClassName("loginmessage")[0].textContent =
    "Signed Out successfully!";
  messagebtn.addEventListener("click", function () {
    window.location.replace("/HTML/index.html");
  });
}

function signup() {
  if (localStorage.isloggedin == "false") {
    window.location.replace("/HTML/signin.html");
  }
}

function account() {
  if (localStorage.loggedinas == "individual") {
    window.location.replace("/HTML/individualaccount.html");
  } else {
    window.location.replace("/HTML/ngoaccount.html");
  }
}
function messagecrossbtn() {
  message.classList.add("invisible");
  messagebg.classList.add("invisible");
}
