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

//message components
let message = document.getElementsByClassName("message")[0];
let messagebtn = document.getElementById("messagebtn");
let messagebg = document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");

let email = document.getElementsByClassName("emailbox")[0];
let pwd = document.getElementsByClassName("pwdbox")[0];
let btn = document.getElementsByClassName("signupbtn")[0];
let count = 0;
// btn.click();
document.getElementById("form").submit(function (e) {
  e.preventDefault();
});

//getting all the users in an array
let users = [];
let newuser = [];
let key=[];
for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).slice(0, 4) == "user") {
    users.push(localStorage.getItem(localStorage.key(i)));
    key.push(i);
  }
}

btn.addEventListener("click", function () {
  if (email.value == "admin_test@gmail.com" && pwd.value == "admin") {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Login as ADMIN.";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    document.onkeydown=function(e){
      return false;
    }
    messagebtn.addEventListener("click", function () {
      //redirect("admin");
      window.location.replace("/HTML/adminindex.html");
    });
  } else {
    for (let i = 0; i < users.length; i++) {
      if (
        email.value == users[i].split(",")[0] &&
        pwd.value == users[i].split(",")[1]
      ) {
        if (users[i].split(",")[2] == "false") {
          //ngo
          localStorage.isloggedin = true;
          localStorage.loggedinas = "ngo";
          let loggedin=[];
          loggedin.push(users[i]);
          loggedin.push("user"+localStorage.key(key[i]).slice(4,localStorage.key(key[i]).length));
          // loggedin.push(users[i]);
          // localStorage.loggedinuser = "user"+localStorage.key(key[i]).slice(4,localStorage.key(key[i]).length);
          localStorage.loggedinuser=loggedin;
          document.getElementsByClassName("loginmessage")[0].textContent =
            "Login as NGO.";
          messagebg.classList.remove("invisible");
          message.classList.remove("invisible");
          document.onkeydown=function(e){
            return false;
          }
          messagebtn.addEventListener("click", function () {
            // redirect("ngo");
            window.location.replace("/HTML/index.html");
          });
        } else {
          localStorage.isloggedin = true;
          localStorage.loggedinas = "individual";
          let loggedin=[];
          loggedin.push(users[i]);
          loggedin.push("user"+localStorage.key(key[i]).slice(4,localStorage.key(key[i]).length));
          // loggedin.push("user"+localStorage.key(key[i]).slice(4,localStorage.key(key[i]).length));
          // loggedin.push(users[i]);
          localStorage.loggedinuser = loggedin;
          document.getElementsByClassName("loginmessage")[0].textContent =
            "Login as Donor";
          messagebg.classList.remove("invisible");
          message.classList.remove("invisible");
          document.onkeydown=function(e){
            return false;
          }
          messagebtn.addEventListener("click", function () {
            // redirect("individual");
            window.location.replace("/HTML/index.html");
          });
        }
      } else {
        count++;
      }
    }
    if (count == users.length) {
      document.getElementById("successmsg").textContent = "Failure!";
      document
        .getElementById("msgimage")
        .setAttribute("src", "/IMAGES/cross.png");
      document.getElementById("messagebtn").textContent = "Try Again";
      document.getElementsByClassName("loginmessage")[0].innerHTML =
        "Invalid Credentials!";
      messagebg.classList.remove("invisible");
      message.classList.remove("invisible");
      document.onkeydown=function(e){
        return false;
      }
      messagebtn.addEventListener("click", function () {
        //redirect("error");
        document.getElementById("form").reset();
        messagebg.classList.add("invisible");
        message.classList.add("invisible");
        document.onkeydown=function(e){
          return true;
        }
        // window.location.replace("/HTML/signin.html");
      });
    }
  }
});


function redirecttosignuppage() {
  window.location.replace("/HTML/signup.html");
}

