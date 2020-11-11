let message = document.getElementsByClassName("message")[0];
message.classList.add("invisible");
let messagebtn=document.getElementById("messagebtn");
let email = document.getElementsByClassName("emailbox")[0];
let pwd = document.getElementsByClassName("pwdbox")[0];
let btn = document.getElementsByClassName("signupbtn")[0];
let usernames = ["admin@admin.com", "test@test.com"];
let passwords = ["admin", "test"];
btn.addEventListener("click",function(){
  if(email.value == usernames[0] && pwd.value == passwords[0]) {
    document.getElementsByClassName("loginmessage")[0].textContent="Login as ADMIN.";
    message.classList.remove("invisible");
    messagebtn.addEventListener("click",function(){
      redirect("admin");
  });
   } else if (email.value == usernames[1] && pwd.value == passwords[1]) {
    document.getElementsByClassName("loginmessage")[0].textContent="Login as NGO.";
    message.classList.remove("invisible");
    messagebtn.addEventListener("click",function(){
      redirect("ngo");
  });
   }
});
function redirect(usertype){
  if(usertype=="admin"){
    window.location.replace("/HTML/adminindex.html");
  }
  else{
    window.location.replace("/HTML/ngoindex.html");
  }
}
