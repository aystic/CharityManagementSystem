let message = document.getElementsByClassName("message")[0];
let messagebtn=document.getElementById("messagebtn");
let messagebg=document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");

if(localStorage.loggedinuser.split(",")[3]=="false"){
  message.classList.remove("invisible");
  messagebg.classList.remove("invisible");
  document.getElementById("msgimage").setAttribute("src","/IMAGES/caution.png ")
  document.getElementById("successmsg").textContent="Caution!";
  document.getElementsByClassName("loginmessage")[0].textContent="Please Submit the required documents for verification first.";
  messagebtn.addEventListener("click",function(){
      window.location.replace("/HTML/ngoindex.html");
  });
} else if(localStorage.loggedinuser.split(",")[4]=="false"){
  message.classList.remove("invisible");
  messagebg.classList.remove("invisible");
  document.getElementById("msgimg").setAttribute("src","/IMAGES/cross.png");
  document.getElementById("successmsg").textContent="Access Denied!";
  document.getElementById("loginmessage").textContent="Verification Pending.";
  messagebtn.addEventListener("click",function(){
      window.location.replace("/HTML/index.html");
  });
}

