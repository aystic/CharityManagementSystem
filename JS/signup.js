let message = document.getElementsByClassName("message")[0];
message.classList.add("invisible");
let messagebtn=document.getElementById("messagebtn");
document.getElementById("form").submit(function(e) {
        e.preventDefault();
});


// btn.addEventListener("click",function(){
//         if(email.value == usernames[0] && pwd.value == passwords[0]) {
//           document.getElementsByClassName("loginmessage")[0].textContent="Login as ADMIN.";
//           message.classList.remove("invisible");
//           messagebtn.addEventListener("click",function(){
//             redirect("admin");
//         });
//          } else if (email.value == usernames[1] && pwd.value == passwords[1]) {
//           document.getElementsByClassName("loginmessage")[0].textContent="Login as NGO.";
//           message.classList.remove("invisible");
//           messagebtn.addEventListener("click",function(){
//             redirect("ngo");
//         });
//          }else{
//           document.getElementById("successmsg").textContent="Failure!";
//           document.getElementById("msgimage").setAttribute("src","/IMAGES/cross.png");
//           document.getElementById("messagebtn").textContent="Try Again";
//           document.getElementsByClassName("loginmessage")[0].innerHTML="Invalid Credentials!";
//           message.classList.remove("invisible");
//           messagebtn.addEventListener("click",function(){
//           redirect("error");
//          });
//         }
//       });
//       function redirect(usertype){
//         if(usertype=="admin"){
//           window.location.replace("/HTML/adminindex.html");
//         }
//         else if(usertype=="ngo"){
//           window.location.replace("/HTML/ngoindex.html");
//         }else if(usertype=="error"){
//           window.location.replace("/HTML/signin.html");
      
//         }
//       }





let btn=document.getElementsByClassName('signupbtn')[0]
btn.click();
btn.addEventListener('click',function(){
        window.location.replace='/HTML/ngoindex.html';
});
function redirecttosigninpage(){
        window.location.replace("/HTML/signin.html");
}
document.getElementById("form").submit(function(e) {
        e.preventDefault();
});


let usercount="";
let username=document.getElementsByClassName("input-box")[0];
let password=document.getElementsByClassName("input-box")[1];
let individual=document.getElementById("Individual");
