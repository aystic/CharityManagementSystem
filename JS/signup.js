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
