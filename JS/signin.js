//message components
let message = document.getElementsByClassName("message")[0];
let messagebtn=document.getElementById("messagebtn");
let messagebg=document.getElementById("messagebg");
message.classList.add("invisible");
messagebg.classList.add("invisible");


let email = document.getElementsByClassName("emailbox")[0];
let pwd = document.getElementsByClassName("pwdbox")[0];
let btn = document.getElementsByClassName("signupbtn")[0];
let count=0;
btn.click();
document.getElementById("form").submit(function(e) {
  e.preventDefault();
});

//getting all the users in an array
let users=[];
let newuser=[];
for(let i=0;i<localStorage.length;i++){
  if(localStorage.key(i).slice(0,4)=="user"){
    users.push(localStorage.getItem(localStorage.key(i)));
  }
}


btn.addEventListener("click",function(){
  if(email.value =="admin@admin.com" && pwd.value =="admin") {
        document.getElementsByClassName("loginmessage")[0].textContent="Login as ADMIN.";
        messagebg.classList.remove("invisible");
        message.classList.remove("invisible");
        messagebtn.addEventListener("click",function(){
          redirect("admin");
      });
    }else{
      for(let i=0;i<users.length;i++){
        if(email.value==users[i].split(",")[0] && pwd.value==users[i].split(",")[1]){
          if(users[i].split(",")[2]=="false"){//ngo
            localStorage.isloggedin=true;
            localStorage.loggedinas="ngo";
            localStorage.loggedinuser=users[i];
            document.getElementsByClassName("loginmessage")[0].textContent="Login as NGO.";
            messagebg.classList.remove("invisible");
            message.classList.remove("invisible");
            messagebtn.addEventListener("click",function(){
              // redirect("ngo");
              window.location.replace("/HTML/index.html");
            });
          }else{
            localStorage.isloggedin=true;
            localStorage.loggedinas="individual";
            localStorage.loggedinuser=users[i];
            document.getElementsByClassName("loginmessage")[0].textContent="Login as Donor";
            messagebg.classList.remove("invisible");
            message.classList.remove("invisible");
            messagebtn.addEventListener("click",function(){
              // redirect("individual");
              window.location.replace("/HTML/index.html");
            });
          }
        }else{
          count++;
        } 
      }
      if(count==users.length){
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
  }
   
  });


// function redirect(usertype){
//   if(usertype=="admin"){
//     window.location.replace("/HTML/adminindex.html");

//   }
//   else if(usertype=="ngo"){
//     if(localStorage.getItem("detailssubmitted")=="false"){
//       window.location.replace("/HTML/ngoindex.html");
//     }else{
      

//     }
//   }else if(usertype=="individual"){
//     if(localStorage.getItem("detailssubmitted")=="false"){
//       window.location.replace("/HTML/individualindex.html");
//     }else{
//       window.location.replace("/HTML/index.html");
//     }
//   }
// }

function redirecttosignuppage(){
  window.location.replace("/HTML/signup.html");
}




// else{
//   for (let i = 0;i < localStorage.length;i++) {
//     if ("username" == localStorage.key(i).slice(0, 8)) {
//       //console.log(localStorage.getItem(localStorage.key(i)));
//       if (localStorage.getItem(localStorage.key(i)) == email.value && localStorage.getItem("password"+(localStorage.key(i)).slice(8,9)==pwd.value)) {
//         count++;
//         if(localStorage.getItem("isindividual"+(localStorage.key(i)).slice(8,9))=="false"){//ngo
//           document.getElementsByClassName("loginmessage")[0].textContent="Login as NGO.";
//           messagebg.classList.remove("invisible");
//           message.classList.remove("invisible");
//           messagebtn.addEventListener("click",function(){
//             redirect("ngo");
//            });
//         }
//           else{//individual
//             document.getElementsByClassName("loginmessage")[0].textContent="Login as Donor.";
//             messagebg.classList.remove("invisible");
//             message.classList.remove("invisible");
//             messagebtn.addEventListener("click",function(){
//             redirect("individual");
//             });
//           }
//       }
//      } else if(count==JSON.parse(localStorage.getItem("usercount"))){
//           document.getElementById("successmsg").textContent="Failure!";
//           document.getElementById("msgimage").setAttribute("src","/IMAGES/cross.png");
//           document.getElementById("messagebtn").textContent="Try Again";
//           document.getElementsByClassName("loginmessage")[0].innerHTML="Invalid Credentials!";
//           messagebg.classList.remove("invisible");
//           message.classList.remove("invisible");
//           messagebtn.addEventListener("click",function(){
//           redirect("error");
//          });
//      }
//   }
// }