
document.querySelector("video").play();
document.querySelector("video").playbackRate = 3;

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      // document.querySelector("body").classList.add("invisible");
      document.querySelector(".loader").classList.add("fadeloader");
    }, 500);
    setInterval(() => {
      document.querySelector(".loader").classList.add("invisible");
      // document.querySelector("body").classList.remove("invisible");
    }, 900);
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

/*
document.getElementById("form").submit(function (e) {
  e.preventDefault();
});
*/

if (!localStorage.getItem("usercount")) {
  localStorage.setItem("usercount", "0");
}

//message components
let message = document.getElementsByClassName("message")[0];
let messagebtn = document.getElementById("messagebtn");
let messagebg = document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");

//formelemtns

let submitbtn = document.getElementsByClassName("signupbtn")[0];
// submitbtn.click();

let email = document.getElementsByClassName("input-box")[0];
let pwd = document.getElementsByClassName("input-box")[1];
let isindividual = document.getElementById("Individual");
let isngo = document.getElementById("NGO");
let documentverified = false;
let detailssubmitted = false;
let accepted=false;
let rejected=false;
let terms = document.getElementById("termsbox");
let alreadyauser = false;
let usercount = JSON.parse(localStorage.getItem("usercount"));
let verificationprompt=false;
usercount++;

//creating an array of existing users
let users = [];
let newuser = [];
for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).slice(0, 4) == "user") {
    users.push(localStorage.getItem(localStorage.key(i)));
  }
}

//submission of form
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  for (let i = 0; i < users.length; i++) {
    if (users[i].split(",")[0] == email.value) {
      alreadyauser = true;
      document
        .getElementById("msgimage")
        .setAttribute("src", "/IMAGES/caution.png");
      document.getElementById("successmsg").textContent = "Caution!";
      document.getElementsByClassName("loginmessage")[0].textContent =
        "Email ID Already Registered.";
      message.classList.remove("invisible");
      messagebg.classList.remove("invisible");
      document.onkeydown=function(e){
        return false;
      }
      document
        .getElementById("messagebtn")
        .addEventListener("click", function () {
          // console.log("Email ID Already registered! ");
          alreadyauser = false;
          window.location.reload();
        });
    }
  }
  //new user
  if (
    email.value != "" &&
    pwd.value != "" &&
    (isindividual.checked || isngo.checked) &&
    terms.checked &&
    alreadyauser == false
  ) {
    // storingthevaluesinlocalstorage
    newuser.push(
      email.value,
      pwd.value,
      isindividual.checked,
      detailssubmitted,
      documentverified,
      accepted,
      rejected,
      verificationprompt
    );
    let loggedin=[];
    localStorage.setItem("user" + usercount, newuser);
    loggedin.push(newuser);
    loggedin.push("user"+usercount);
    localStorage.loggedinuser =loggedin;
    localStorage.setItem("usercount", usercount);
    document
      .getElementById("msgimage")
      .setAttribute("src", "/IMAGES/check.png");
    document.getElementById("successmsg").textContent = "Success!!";
    if (newuser[2] == true) {
      document.getElementsByClassName("loginmessage")[0].textContent =
        "SignUp as donor Successfull.";
    } else {
      document.getElementsByClassName("loginmessage")[0].textContent =
        "SignUp as NGO Successfull.";
    }
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document.onkeydown=function(e){
      return false;
    }
    document
      .getElementById("messagebtn")
      .addEventListener("click", function () {
        if (isindividual.checked) {
          localStorage.isloggedin = true;
          localStorage.loggedinas = "individual";
          window.location.replace("/HTML/individualindex.html");
        } else {
          localStorage.isloggedin = true;
          localStorage.loggedinas = "ngo";
          window.location.replace("/HTML/ngoindex.html");
        }
      });
    }
  // } else if (
  //   email.value == "" &&
  //   pwd.value == "" &&
  //   isindividual.checked == false &&
  //   isngo.checked == false &&
  //   terms.checked == false &&
  //   alreadyauser == false
  // ) {
  //   document
  //     .getElementById("msgimage")
  //     .setAttribute("src", "/IMAGES/caution.png");
  //   document.getElementById("successmsg").textContent = "Caution!";
  //   document.getElementsByClassName("loginmessage")[0].textContent =
  //     "Please fill the details first.";
  //   message.classList.remove("invisible");
  //   messagebg.classList.remove("invisible");
  //   document.onkeydown=function(e){
  //     return false;
  //   }
  //   document
  //     .getElementById("messagebtn")
  //     .addEventListener("click", function () {
  //       // window.location.replace("/HTML/signup.html");
  //       document.getElementById("form").reset();
  //       window.location.reload();
  //     });
  // } 
  // else if (alreadyauser == false) {
  //   document
  //     .getElementById("msgimage")
  //     .setAttribute("src", "/IMAGES/cross.png");
  //   document.getElementById("successmsg").textContent = "Failure!!";
  //   document.getElementsByClassName("loginmessage")[0].textContent =
  //     "Invalid Credentials.";
  //   message.classList.remove("invisible");
  //   messagebg.classList.remove("invisible");
  //   document.onkeydown=function(e){
  //     return false;
  //   }
  //   document
  //     .getElementById("messagebtn")
  //     .addEventListener("click", function () {
  //       message.classList.add("invisible");
  //       messagebg.classList.add("invisible");
  //       // window.location.replace("/HTML/signup.html");
  //       document.getElementById("form").reset();
  //       document.onkeydown=function(e){
  //         return true;
  //       }
  //     });
  // }
});
//});

function redirecttosigninpage() {
  window.location.replace("/HTML/signin.html");
}
