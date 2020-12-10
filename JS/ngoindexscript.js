document.querySelector("video").play();
document.querySelector("video").playbackRate=2;

document.onreadystatechange=function(){
    if(document.readyState==="complete"){
        setTimeout(function(){
        // document.querySelector("body").classList.add("invisible");
        document.querySelector(".loader").classList.add("fadeloader");
        },1000)
        setInterval(() => {
        document.querySelector(".loader").classList.add("invisible");
        // document.querySelector("body").classList.remove("invisible");
          
        }, 1500);
      }
    else{
      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      }, false);
F
    }
}

document.getElementById("form").submit(function (e) {
    e.preventDefault();
});


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
let ngoname = document.getElementById('name');
let ngoaddress = document.getElementById('address');
let ngopincode = document.getElementById('pincode');
let ngocity = document.getElementById('city');
let ngostate = document.getElementById('state');
let ngocontact = document.getElementById('contact');
let ngodifficulties = document.getElementById('textarea');
let btn = document.getElementById('submitbtn');
let detailsSubmitted=[];
// btn.addEventListener("click",function(){
//         if (ngoname != "" && ngoaddress != "" && ngopincode != "" && ngocity != "" && ngostate != "" && ngocontact != "") {
//             detailsSubmitted.push(
//                 localStorage.loggedinuser.split(",")[5],
//                 ngoname,
//                 ngoaddress,
//                 ngopincode,
//                 ngocity,
//                 ngostate,
//                 ngocontact,
//                 ngodifficulties
//             );
//             localStorage.setItem("userDetails"+localStorage.loggedinuser.split(",")[5].slice(4,localStorage.loggedinuser.split(",")[5].length),detailsSubmitted);
//             alert("Details submitted!");
//             window.location.replace("/HTML/index.html");
//         }
//         else{"
//             alert("Invalid details!");
//             document.querySelector("#form").reset();
//         }
// });
btn.addEventListener("click",function(){
    if(ngoname != "" && ngoaddress != "" && ngocity != "" && ngostate!= "" && ngopincode != "" && ngocontact != "" ){
        alert("Details submitted!");
    }else{
        alert("Invalid Details!");
    }
});