if (localStorage.isloggedin != "true") {
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
      window.location.replace("/HTML/signin.html");
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
} else if (localStorage.loggedinas != "ngo") {
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
      window.location.replace("/HTML/accessdenied.html");
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
} else if (
  localStorage.loggedinuser.split(",")[3] == "true" &&
  localStorage.loggedinuser.split(",")[4] == "true"
) {
  if (localStorage.loggedinuser.split(",")[5] == "true") {
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
    let message = document.querySelector(".message");
    let messagebg = document.querySelector("#messagebg");
    message.classList.add("invisible");
    messagebg.classList.add("invisible");
  } else {
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
    document
      .getElementById("msgimage")
      .setAttribute("src", "/IMAGES/cross.png");
    document.getElementById("successmsg").textContent = "Failure";
    document.getElementsByClassName("loginmessage")[0].textContent =
      "Access Denied!";
    document.getElementById("messagebg").classList.remove("invisible");
    document.getElementsByClassName("message")[0].classList.remove("invisible");
    document
      .getElementById("messagebtn")
      .addEventListener("click", function () {
        window.location.replace("/HTML/index.html");
      });
  }
}

// if(localStorage.isloggedin!="true" || localStorage.loggedinuser.split(",")[2] !="false" || localStorage.loggedinuser.split(",")[3] !="true" || localStorage.loggedinuser.split(",")[4] !="true"){
//   window.location.replace("/HTML/signin.html");
// }else{
//   document.querySelector("video").play();
// document.querySelector("video").playbackRate = 3;

// document.onreadystatechange = function () {
//   if (document.readyState === "complete") {
//     setTimeout(function () {
//       // document.querySelector("body").classList.add("invisible");
//       document.querySelector(".loader").classList.add("fadeloader");
//     }, 500);
//     setInterval(() => {
//       document.querySelector(".loader").classList.add("invisible");
//       // document.querySelector("body").classList.remove("invisible");
//     }, 900);
//   } else {
//     window.addEventListener(
//       "contextmenu",
//       function (e) {
//         e.preventDefault();
//       },
//       false
//     );
//   }
// };

// document.getElementById("form").submit(function (e) {
//   e.preventDefault();
// });

// }
