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
    }, 1000);
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
  document
    .getElementById("msgimage")
    .setAttribute("src", "/IMAGES/caution.png");
  document.getElementById("successmsg").textContent = "Caution!";
  document.getElementsByClassName("loginmessage")[0].textContent =
    "Please Submit the required documents for submission first.";
  messagebtn.addEventListener("click", function () {
    window.location.replace("/HTML/individualindex.html");
  });
} else if (localStorage.loggedinuser.split(",")[4] == "false") {
  message.classList.remove("invisible");
  messagebg.classList.remove("invisible");
  document.getElementById("msgimg").setAttribute("src", "/IMAGES/cross.png");
  document.getElementById("successmsg").textContent = "Access Denied!";
  document.getElementById("loginmessage").textContent = "Verification Pending.";
  messagebtn.addEventListener("click", function () {
    window.location.replace("/HTML/index.html");
  });
}
