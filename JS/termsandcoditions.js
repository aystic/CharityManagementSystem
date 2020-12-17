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
document.getElementById("homebtn").addEventListener("click",function(){
  window.close();
});
