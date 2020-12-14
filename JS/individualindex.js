if(localStorage.isloggedin!=true || localStorage.loggedinuser.split(",")[2] !="true" || localStorage.loggedinuser.split(",")[3] !="false" ){
    window.location.replace("/HTML/signin.html");
}else{
    document.querySelector("video").play();
document.querySelector("video").playbackRate=2;

document.onreadystatechange=function(){
    if(document.readyState==="complete"){
        setTimeout(function(){
        // document.querySelector("body").classList.add("invisible");
        document.querySelector(".loader").classList.add("fadeloader");
        },500)
        setInterval(() => {
        document.querySelector(".loader").classList.add("invisible");
        // document.querySelector("body").classList.remove("invisible");
          
        }, 1000);
      }
    else{
      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      }, false);
    }
}


let addfile = document.getElementById('addnewfile');
let removefile = document.getElementById('removenewfile');
let filelist = document.getElementById('filelist');
addfile.onclick = function () {
    let li = document.createElement('li');
    li.innerHTML = '<input type="file" class="Uploadbtn" placeholder="Upload">';
    filelist.append(li);
}
removefile.onclick = function () {
    filelist.lastElementChild.remove();
}
let donorfname = document.getElementById('fname');
let donorlname = document.getElementById('lname');
let donoraddress = document.getElementById('address');
let donorpincode = document.getElementById('pincode');
let donorcity = document.getElementById('city');
let donorstate = document.getElementById('state');
let donorcontact = document.getElementById('contact');
let donoraadhar = document.getElementById('aadhar');
let donorpan = document.getElementById('pan');
let donordocument = document.getElementById('document');
let btn = document.getElementById('submitbtn');
let detailsSubmitted=[];

let messagebg=document.getElementById("messagebg");
let message=document.getElementsByClassName("message")[0];
let messagebtn=document.getElementById("messagebtn");

messagebg.classList.add("invisible");
message.classList.add("invisible");

document.getElementById("form").submit(function (e) {
    e.preventDefault();
  });

btn.addEventListener("click",function(){
    if(donorfname.value != "" && donorlname.value != "" && donoraddress.value != "" && donorcity.value != "" && donorstate.value!= "" && donorpincode.value != "" && donorcontact.value != "" && donoraadhar.value!="" && donorpan.value!= ""){
        let detailsuser=[];
        detailsuser.push(
            donorfname.value,
            donorlname.value,
            donoraddress.value,
            donorcity.value,
            donorstate.value,
            donorpincode.value,
            donorcontact.value,
            donoraadhar.value,
            donorpan.value
            // donordocument.value,

        );
        localStorage.setItem("Detailsuser"+localStorage.loggedinuser.split(",")[5].slice(4,5),detailsuser);
        let user=[];
        for(let i=0;i<6;i++){
            user.push(localStorage.loggedinuser.split(",")[i]);
        }
        user[3]="true";
        localStorage.setItem("loggedinuser",user);
        user.pop();
        localStorage.setItem("user"+localStorage.loggedinuser.split(",")[5].slice(4,5),user);
        document.getElementsByClassName("loginmessage")[0].textContent =
        "Details Submitted Successfully. Please wait for the verification.";
        messagebg.classList.remove("invisible");
        message.classList.remove("invisible");
        document.onkeydown=function(e){
            return false;
        }
        messagebtn.addEventListener("click", function () {
            //redirect("admin");
            window.location.replace("/HTML/index.html");
        });
    }
});
}

