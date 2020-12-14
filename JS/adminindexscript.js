if (localStorage.loggedinas != "admin") {
  window.location.replace("/HTML/signin.html");
} else {
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
      window.addEventListener(
        "contextmenu",
        function (e) {
          e.stopPropagation();
        },
        true
      );
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
  let messagebg = document.getElementById("messagebg");
  let fetch = document.getElementById("messagebtn");
  let list = document.getElementById("list");
  let ngoname = localStorage.getItem("nameofngo");
  let ngoaddress = localStorage.getItem("addressofngo");
  let ngopincode = localStorage.getItem("pincodeofngo");
  let ngocity = localStorage.getItem("cityofngo");
  let ngostate = localStorage.getItem("stateofngo");
  let ngocontact = localStorage.getItem("contactofngo");
  let ngodifficulties = localStorage.getItem("difficultiesofngo");

  message.classList.add("invisible");
  messagebg.classList.add("invisible");

  message.classList.remove("invisible");
  messagebg.classList.remove("invisible");

  fetch.onclick = function () {
    message.classList.add("invisible");
    messagebg.classList.add("invisible");
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
}
