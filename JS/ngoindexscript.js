let addfile=document.getElementById('addnewfile');
let removefile=document.getElementById('removenewfile');
let filelist=document.getElementById('filelist');
addfile.onclick = function(){
    let li=document.createElement('li');
    li.innerHTML='<input type="file" class="Uploadbtn" placeholder="Upload">';
    filelist.append(li);
}
removefile.onclick = function(){
    filelist.lastElementChild.remove();
}
let ngoname=document.getElementById('name');
let ngoaddress=document.getElementById('address');
let ngopincode=document.getElementById('pincode');
let ngocity=document.getElementById('city');
let ngostate=document.getElementById('state');
let ngocontact=document.getElementById('contact');
let ngodifficulties=document.getElementById('textarea');
let btn=document.getElementById('submitbtn');
btn.onclick=function(){
    localStorage.setItem("nameofngo",ngoname.value);
    localStorage.setItem("addressofngo",ngoaddress.value);
    localStorage.setItem("cityofngo",ngocity.value);
    localStorage.setItem("stateofngo",ngostate.value);
    localStorage.setItem("pincodeofngo",ngopincode.value);
    localStorage.setItem("contactofngo",ngocontact.value);
    localStorage.setItem("difficultiesofngo",ngodifficulties.value);
    alert('Details submitted successfully!');
};


