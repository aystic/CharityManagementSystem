
let email=document.getElementsByClassName('emailbox')[0];
let pwd=document.getElementsByClassName('pwdbox')[0];
let btn=document.getElementsByClassName('signupbtn')[0];
email.setAttribute('type','email');
pwd.setAttribute('type','password');
let usernames=['admin@admin.com','test@test.com'];
let passwords=['admin','test'];
btn.addEventListener('click',function(){
    if(email.value==usernames[0]&&pwd.value==passwords[0]){
        alert('Login as ADMIN!');
        window.location.href='../adminindex.html';
    }
    else if(email.value==usernames[1]&&pwd.value==passwords[1])
    {
        alert('Login as NGO!');
        window.location.replace('../ngoindex.html');

    }
    else{
        alert('Invalid Email address or Password!');
    }
});
