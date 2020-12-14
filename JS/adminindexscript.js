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

let fetch = document.getElementById("fetchbtn");
let list = document.getElementById("list");
let ngoname = localStorage.getItem("nameofngo");
let ngoaddress = localStorage.getItem("addressofngo");
let ngopincode = localStorage.getItem("pincodeofngo");
let ngocity = localStorage.getItem("cityofngo");
let ngostate = localStorage.getItem("stateofngo");
let ngocontact = localStorage.getItem("contactofngo");
let ngodifficulties = localStorage.getItem("difficultiesofngo");
fetch.onclick = function () {
  let li = document.createElement("li");
  li.innerHTML =
    "<ul><li>" +
    ngoname +
    "</li><li>" +
    ngoaddress +
    "</li><li>" +
    ngocity +
    "</li><li>" +
    ngostate +
    "</li><li>" +
    ngopincode +
    "</li><li>" +
    ngocontact +
    "</li><li>" +
    ngodifficulties +
    '</li><li><button id="documentsdownloadbtn">Download the Documents!</button><button id="acceptbtn">Accept!</button><button id="rejectbtn">Reject</button></li></ul>';
  list.append(li);
};
