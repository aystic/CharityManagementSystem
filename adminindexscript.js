let fetch=document.getElementById('fetchbtn')
let list=document.getElementById('list')
let ngoname=localStorage.getItem('nameofngo');
let ngoaddress=localStorage.getItem('addressofngo');
let ngopincode=localStorage.getItem('pincodeofngo');
let ngocity=localStorage.getItem('cityofngo');
let ngostate=localStorage.getItem('stateofngo');
let ngocontact=localStorage.getItem('contactofngo');
let ngodifficulties=localStorage.getItem('difficultiesofngo');
fetch.onclick=function(){
    let li=document.createElement('li')
    li.innerHTML='<ul><li>'+ngoname+'</li><li>'+ngoaddress+'</li><li>'+ngocity+'</li><li>'+ngostate+'</li><li>'+ngopincode+'</li><li>'+ngocontact+'</li><li>'+ngodifficulties+'</li><li><button id="documentsdownloadbtn">Download the Documents!</button><button id="acceptbtn">Accept!</button><button id="rejectbtn">Reject</button></li></ul>';
    list.append(li)
}
