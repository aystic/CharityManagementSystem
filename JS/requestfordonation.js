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

    let addfile = document.getElementById("addnewfile");
    let removefile = document.getElementById("removenewfile");
    let filelist = document.getElementById("filelist");
    addfile.onclick = function () {
      let li = document.createElement("li");
      li.innerHTML =
        '<input type="file" class="Uploadbtn" placeholder="Upload" disabled >';
      filelist.append(li);
    };
    removefile.onclick = function () {
      filelist.lastElementChild.remove();
    };

    let accountno1=document.getElementById("accountno1");
    let accountno2=document.getElementById("accountno2");
    let ifsc=document.getElementById("ifsc");
    let bankname=document.getElementById("branch");
    let textarea=document.getElementById("textarea");
    accountno2.onpaste=function(e){
      e.preventDefault();
      alert("Pasting disabled! Please type the Account number manually.")
      // return false;
    }

    document.getElementById("form").addEventListener("submit",function(e){
      // alert("form submitted!");
      e.preventDefault();
      if(accountno1.value!=accountno2.value){
        document.getElementById("msgimage").setAttribute("src","/IMAGES/caution.png");
        document.getElementById("successmsg").textContent="Caution!";
        document.getElementsByClassName("loginmessage")[0].textContent="Both the account numbers do not match! Please try again.";
        document.onkeydown=function(e){
          return false;
        }
        messagebg.classList.remove("invisible");
        message.classList.remove("invisible");
        document.getElementById("messagebtn").addEventListener("click",function(){
          accountno1.value="";
          accountno2.value="";
          document.onkeydown=function(e){
            return true;
          }
          messagebg.classList.add("invisible");
          message.classList.add("invisible");
        });
      }
      else{

        let details=[];
        let user=localStorage.loggedinuser.split(",")[8];
        // details.push(localStorage.getItem("Details"+user).split(","));
        // details.pop();
        // details.push(accountno2.value);
        // details.push(ifsc.value);
        // details.push(branch.value);
        // details.push(textarea.value);
        for(let i=0;i<7;i++){
          details[i]=localStorage.getItem("Details"+user).split(",")[i];
        }
        details.push(accountno2.value);
        details.push(ifsc.value);
        details.push(branch.value);
        details.push(textarea.value);
        localStorage.setItem("Requestby"+user,details);
        document.getElementById("msgimage").setAttribute("src","/IMAGES/check.png");
        document.getElementById("successmsg").textContent="Success!";
        document.getElementsByClassName("loginmessage")[0].textContent="Request for donation created successfully!";
        document.onkeydown=function(e){
          return false;
        }
        messagebg.classList.remove("invisible");
        message.classList.remove("invisible");
        document.getElementById("messagebtn").addEventListener("click",function(){
          document.onkeydown=function(e){
            return true;
          }
          window.location.replace("/HTML/index.html");
        });
      }

    });

    

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
