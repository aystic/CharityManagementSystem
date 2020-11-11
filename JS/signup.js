let btn=document.getElementsByClassName('signupbtn')[0]
btn.addEventListener('click',function(){
        window.location.replace='/HTML/ngoindex.html';
});
function redirecttosigninpage(){
        window.location.replace("/HTML/signin.html");
}
document.getElementById("form").submit(function(e) {
        e.preventDefault();
});