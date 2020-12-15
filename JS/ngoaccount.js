if(localStorage.isloggedin!="true" || localStorage.loggedinuser.split(",")[2] !="false"){
  window.location.replace("/HTML/signin.html");
}else{
  document.querySelector("video").play();
document.querySelector("video").playbackRate = 2;

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

let message = document.getElementsByClassName("message")[0];
let messagebtn = document.getElementById("messagebtn");
let messagebg = document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");

if (localStorage.loggedinuser.split(",")[3] == "false") {
  message.classList.remove("invisible");
  messagebg.classList.remove("invisible");
  document.onkeydown=function(e){
    return false;
  }
  document
    .getElementById("msgimage")
    .setAttribute("src", "/IMAGES/caution.png ");
  document.getElementById("successmsg").textContent = "Caution!";
  document.getElementById("loginmessage").textContent =
    "Please Submit the required documents for verification first.";
  messagebtn.addEventListener("click", function () {
    window.location.replace("/HTML/ngoindex.html");
  });
} else if (
  localStorage.loggedinuser.split(",")[4] == "false" &&
  localStorage.loggedinuser.split(",")[3] == "true" ){
  message.classList.remove("invisible");
  messagebg.classList.remove("invisible");
  document.onkeydown=function(e){
    return false;
  }
  document.getElementById("msgimage").setAttribute("src", "/IMAGES/cross.png");
  document.getElementById("successmsg").textContent = "Access Denied!";
  document.getElementById("loginmessage").textContent = "Verification Pending.";
  messagebtn.addEventListener("click", function () {
    window.location.replace("/HTML/index.html");
  });
}

}

