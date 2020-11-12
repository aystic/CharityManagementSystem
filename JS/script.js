let scrollinpx=window.scrollY;
let btn=document.getElementById('gototop');
btn.classList.add("invisible");
function myscrollfunction(){
    if (window.scrollY <= 500)
    {
        btn.classList.add("invisible");  
    }
    else{
        btn.classList.remove("invisible")
    }
}

//LOCALSTORAGE SECTION
let storageavailable=false;
if(!JSON.parse(localStorage.storageavailable)){
    localStorage.setItem("storageavailable","true");
    localStorage.setItem("isloggedin",false);
    localStorage.setItem("loggedinas","");
}

// hiding and showing the signoutbutton
document.getElementById("isloggedin").classList.add("invisible");
document.getElementById("accountbtn").classList.add("invisible");

if(JSON.parse(localStorage.isloggedin)){
    if(localStorage.loggedinas=="individual"){
        document.getElementById("isloggedin").classList.remove("invisible");
        document.getElementById("accountbtn").classList.remove("invisible");
        document.getElementById("requestbutton").classList.add("invisible");
        document.getElementById("tosignin").classList.add("invisible");
    }
    if(localStorage.loggedinas=="ngo"){
        document.getElementById("isloggedin").classList.remove("invisible");
        document.getElementById("accountbtn").classList.remove("invisible");
        document.getElementById("donatebtn").classList.add("invisible");
        document.getElementById("tosignin").classList.add("invisible");
    }
}


// buttonfunctions
function donateredirect(){
    if(JSON.parse(localStorage.isloggedin)){
        window.location.replace("/HTML/donate.html");
    }else{
        window.location.replace("/HTML/signin.html");
    }
}
function requestfordonationredirect(){
    if(JSON.parse(localStorage.isloggedin)){
        window.location.replace("/HTML/requestfordonation.html");
    }else{
        window.location.replace("/HTML/signin.html");
    }
}
function signout(){
    localStorage.isloggedin=false;
    localStorage.loggedinas="";
    window.location.replace("/HTML/index.html");
}
function signup(){
    window.location.replace("/HTML/signin.html");
}
function account(){
    if(localStorage.loggedinas=="individual"){
        window.location.replace("/HTML/individualaccount.html");
    }else{
        window.location.replace("/HTML/ngoaccount.html");
    }
}