document.querySelector("video").play();
document.querySelector("video").playbackRate = 2;

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      document.querySelector(".loader").classList.add("fadeloader");
    }, 1500);
    setInterval(() => {
      document.querySelector("body").classList.remove("invisible");
      document.querySelector(".loader").classList.add("invisible");
      // document.querySelector("body").classList.remove("bodyhide");
    }, 1900);
    document.onkeydown = function (e) {
      return true;
    };
  } else {
    document.onkeydown = function (e) {
      return false;
    };
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
  localStorage.setItem("Totalusers", "0");
  localStorage.setItem("Totalngos", "0");
  localStorage.setItem("Totaldonors", "0");
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
    localStorage.getItem("loggedinuser").split(",")[4] == "true"
  ) {
    window.location.replace("/HTML/donate.html");
  } else if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[4] == "false" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "true"
  ) {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please wait for the document verification!";
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document.onkeydown = function (e) {
      return false;
    };
    messagebtn.addEventListener("click", function () {
      message.classList.add("invisible");
      messagebg.classList.add("invisible");
      document.onkeydown = function (e) {
        return true;
      };
    });
  } else if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "false"
  ) {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please submit your details for verification first!";
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document.onkeydown = function (e) {
      return false;
    };
    messagebtn.addEventListener("click", function () {
      window.location.replace("/HTML/individualindex.html");
    });
  } else {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please SignIn to access this feature!";

    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.onkeydown = function (e) {
      return false;
    };
    messagebtn.addEventListener("click", function () {
      signup();
    });
  }
}

function requestfordonationredirect() {
  if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[4] == "true"
  ) {
    window.location.replace("/HTML/requestfordonation.html");
  } else if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[4] == "false" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "true"
  ) {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Verification Pending!";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.onkeydown = function (e) {
      return false;
    };
    messagebtn.addEventListener("click", function () {
      messagebg.classList.add("invisible");
      message.classList.add("invisible");
      document.onkeydown = function (e) {
        return true;
      };
    });
  } else if (
    localStorage.isloggedin == "true" &&
    localStorage.getItem("loggedinuser").split(",")[3] == "false"
  ) {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please submit your details for verification!";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.onkeydown = function (e) {
      return false;
    };
    messagebtn.addEventListener("click", function () {
      window.location.replace("/HTML/ngoindex.html");
    });
  } else {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please SignIn to access this feature!";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.onkeydown = function (e) {
      return false;
    };
    messagebtn.addEventListener("click", function () {
      signup();
    });
  }
}
function signout() {
  localStorage.isloggedin = false;
  localStorage.loggedinas = "";
  localStorage.loggedinuser = "";
  messagecross.classList.add("invisible");
  document.getElementById("msgimage").setAttribute("src", "/IMAGES/check.png");
  document.getElementById("msgimage").style.marginTop = "20px";
  document.getElementsByClassName("loginmessage")[0].textContent =
    "Signed Out successfully!";
  messagebg.classList.remove("invisible");
  message.classList.remove("invisible");
  document.onkeydown = function (e) {
    return false;
  };
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
  document.onkeydown = function (e) {
    return true;
  };
}
