if(localStorage.isloggedin!="true"){
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
}else if(localStorage.loggedinas!="individual"){
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
}else if(localStorage.loggedinuser.split(",")[3]=="true" && localStorage.loggedinuser.split(",")[4]=="true"){
    if(localStorage.loggedinuser.split(",")[5]=="true"){
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
      let message=document.querySelector(".message");
      let messagebg=document.querySelector("#messagebg");
      let successmsg=document.querySelector("#successmsg");
      let loginmessage=document.querySelector(".loginmessage");
      let messagebtn=document.querySelector("#messagebtn");
      let msgimage=document.querySelector("#msgimage");
      message.classList.add("invisible");
      messagebg.classList.add("invisible");

      let request=0;
      let key = [];
      let userno=[];

      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i).slice(0,13)=="Requestbyuser"){
          request++;
          let usernumber = localStorage
          .key(i)
          .slice(13, localStorage.key(i).length);
          key.push(usernumber + String(i));
          userno.push(usernumber);
        }
      }
      key.sort();
      userno.sort();

      if(request==0){
        msgimage.setAttribute("src","/IMAGES/caution.png");
        successmsg.textContent="Caution!";
        loginmessage.textContent="No Requests for donation found!";
        messagebg.classList.remove("invisible");
        message.classList.remove("invisible");
        document.onkeydown=function(e){
          return false;
        }
        messagebtn.addEventListener("click",function(){
          document.onkeydown=function(e){
            return true;
          }
          messagebg.classList.add("invisible");
          message.classList.add("invisible");
        });
      }else{
        msgimage.setAttribute("src","/IMAGES/caution.png");
        successmsg.textContent="Caution!";
        loginmessage.textContent=request+" Request(s) for donation found!";
        messagebtn.textContent="See Requests!"
        messagebg.classList.remove("invisible");
        message.classList.remove("invisible");
        document.onkeydown=function(e){
          return false;
        }
        messagebtn.addEventListener("click",function(){
          document.onkeydown=function(e){
            return true;
          }
          // alert("details fetched!")
          fetchdetails();
          messagebg.classList.add("invisible");
          message.classList.add("invisible");
        });
      }

      let details=[];
      for(let i=0;i<request;i++){
        let temp=localStorage.getItem("Requestbyuser"+userno[i]).split(",");
        details.push(temp);
      }

      function fetchdetails(){
        // alert("details fetched!")
        for(let i=0;i<request;i++){
          let li = document.createElement("li");
          li.innerHTML="<ul><li>NGO NAME : "+details[i][0]+"</li><li>NGO ADDRESS : "+details[i][1]+"</li><li>CITY : "+details[i][2]+"</li><li>STATE : "+details[i][3]+"</li><li>PINCODE : "+details[i][4]+"</li><li>CONTACT : "+details[i][5]+"</li><li>BANK ACCOUNT NUMBER : "+details[i][6]+"</li><li>IFSC CODE : "+details[i][7]+"</li><li>BANK & BRANCH NAME : "+details[i][8]+"</li><li>DONATION NEEDED FOR ? : "+details[i][9]+"</li><li><button class='documentsdownloadbtn'>See Bank Details!</button><button class='donatebtn' onclick='donate()'>Donate</button></ul>";
          document.getElementById("list").append(li);

        }
      }
      function donate(){
        window.location.replace("/HTML/donateredirect.html");
      }




  }else{
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
    document.getElementById("msgimage").setAttribute("src","/IMAGES/cross.png");
    document.getElementById("successmsg").textContent="Failure";
    document.getElementsByClassName("loginmessage")[0].textContent =
    "Access Denied!";
  document.getElementById("messagebg").classList.remove("invisible");
  document.getElementsByClassName("message")[0].classList.remove("invisible");
  document.getElementById("messagebtn").addEventListener("click",function(){
    window.location.replace("/HTML/index.html")
  });
  }

}


