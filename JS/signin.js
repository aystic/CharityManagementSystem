//message components
let message = document.getElementsByClassName("message")[0];
let messagebtn=document.getElementById("messagebtn");
let messagebg=document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");


let email = document.getElementsByClassName("emailbox")[0];
let pwd = document.getElementsByClassName("pwdbox")[0];
let btn = document.getElementsByClassName("signupbtn")[0];
btn.click();  
let usernames = ["admin@admin.com", "test@test.com"];
let passwords = ["admin", "test"];
document.getElementById("form").submit(function(e) {
  e.preventDefault();
});
btn.addEventListener("click",function(){
  if(email.value == usernames[0] && pwd.value == passwords[0]) {
    document.getElementsByClassName("loginmessage")[0].textContent="Login as ADMIN.";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    messagebtn.addEventListener("click",function(){
      redirect("admin");
  });
   } else if (email.value == usernames[1] && pwd.value == passwords[1]) {
    document.getElementsByClassName("loginmessage")[0].textContent="Login as NGO.";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    messagebtn.addEventListener("click",function(){
      redirect("ngo");
  });
   }else{
    document.getElementById("successmsg").textContent="Failure!";
    document.getElementById("msgimage").setAttribute("src","/IMAGES/cross.png");
    document.getElementById("messagebtn").textContent="Try Again";
    document.getElementsByClassName("loginmessage")[0].innerHTML="Invalid Credentials!";
    messagebg.classList.remove("invisible");
    message.classList.remove("invisible");
    messagebtn.addEventListener("click",function(){
    redirect("error");
   });
  }
});
function redirect(usertype){
  if(usertype=="admin"){
    window.location.replace("/HTML/adminindex.html");
  }
  else if(usertype=="ngo"){
    window.location.replace("/HTML/ngoindex.html");
  }else if(usertype=="error"){
    window.location.replace("/HTML/signin.html");

  }
}
function redirecttosignuppage(){
  window.location.replace("/HTML/signup.html");
}
