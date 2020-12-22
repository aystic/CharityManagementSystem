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
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
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