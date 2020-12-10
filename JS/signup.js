document.querySelector("video").play();
document.querySelector("video").playbackRate = 2;

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      // document.querySelector("body").classList.add("invisible");
      document.querySelector(".loader").classList.add("fadeloader");
    }, 1000);
    setInterval(() => {
      document.querySelector(".loader").classList.add("invisible");
      // document.querySelector("body").classList.remove("invisible");
    }, 1500);
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
document.getElementById("form").submit(function (e) {
  e.preventDefault();
});

let submitbtn = document.getElementsByClassName("signupbtn")[0];
// submitbtn.click();

let email = document.getElementsByClassName("input-box")[0];
let pwd = document.getElementsByClassName("input-box")[1];
let isindividual = document.getElementById("Individual");
let isngo = document.getElementById("NGO");
let documentverified = false;
let detailssubmitted = false;
let terms = document.getElementById("termsbox");
let alreadyauser = false;
let usercount = JSON.parse(localStorage.getItem("usercount"));
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
submitbtn.addEventListener("click", function () {
  for (let i = 0; i < users.length; i++) {
    if (users[i].split(",")[0] == email.value) {
      message.classList.remove("invisible");
      messagebg.classList.remove("invisible");
      alreadyauser = true;
      message.classList.remove("invisible");
      messagebg.classList.remove("invisible");
      document
        .getElementById("msgimage")
        .setAttribute("src", "/IMAGES/caution.png");
      document.getElementById("successmsg").textContent = "Caution!";
      document.getElementsByClassName("loginmessage")[0].textContent =
        "Email ID Already Registered.";
      document
        .getElementById("messagebtn")
        .addEventListener("click", function () {
          // console.log("Email ID Already registered! ");
          message.classList.add("invisible");
          messagebg.classList.add("invisible");
          alreadyauser = false;
          document.getElementById("form").reset();
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
      documentverified
    );
    let loggedin=[];
    localStorage.setItem("user" + usercount, newuser);
    loggedin.push(newuser);
    loggedin.push("user"+usercount);
    localStorage.loggedinuser =loggedin;
    localStorage.setItem("usercount", usercount);
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
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
    document
      .getElementById("messagebtn")
      .addEventListener("click", function () {
        message.classList.add("invisible");
        messagebg.classList.add("invisible");
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
  } else if (
    email.value == "" &&
    pwd.value == "" &&
    isindividual.checked == false &&
    isngo.checked == false &&
    terms.checked == false &&
    alreadyauser == false
  ) {
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document
      .getElementById("msgimage")
      .setAttribute("src", "/IMAGES/caution.png");
    document.getElementById("successmsg").textContent = "Caution!";
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Please fill the details first.";
    document
      .getElementById("messagebtn")
      .addEventListener("click", function () {
        message.classList.add("invisible");
        messagebg.classList.add("invisible");
        // window.location.replace("/HTML/signup.html");
        document.getElementById("form").reset();
      });
  } else if (alreadyauser == false) {
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    document
      .getElementById("msgimage")
      .setAttribute("src", "/IMAGES/cross.png");
    document.getElementById("successmsg").textContent = "Failure!!";
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Invalid Credentials.";
    document
      .getElementById("messagebtn")
      .addEventListener("click", function () {
        message.classList.add("invisible");
        messagebg.classList.add("invisible");
        // window.location.replace("/HTML/signup.html");
        document.getElementById("form").reset();
      });
  }
});
//});

function redirecttosigninpage() {
  window.location.replace("/HTML/signin.html");
}
