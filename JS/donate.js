if(localStorage.isloggedin!=true || localStorage.loggedinuser.split(",")[2] !="true" || localStorage.loggedinuser.split(",")[3] !="true" || localStorage.loggedinuser.split(",")[4] !="true"){
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
}


