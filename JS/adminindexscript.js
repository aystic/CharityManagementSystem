if (localStorage.loggedinas != "admin") {
  window.location.replace("/HTML/signin.html");
} else {
  document.querySelector("video").play();
  document.querySelector("video").playbackRate = 2;

  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      setTimeout(function () {
        // document.querySelector("body").classList.add("invisible");
        document.querySelector(".loader").classList.add("fadeloader");
      }, 500);
      setInterval(() => {
        document.querySelector(".loader").classList.add("invisible");
        // document.querySelector("body").classList.remove("invisible");
      }, 900);
      window.addEventListener(
        "contextmenu",
        function (e) {
          e.stopPropagation();
        },
        true
      );
    } else {
      window.addEventListener(
        "contextmenu",
        function (e) {
          e.preventDefault();
        },
        false
      );
    }
  };

  
  let totalusers=document.getElementById("total");
  let ngos=document.getElementById("totalngo");
  let donors=document.getElementById("totaldonor");
  totalusers.textContent="Total Users = "+JSON.parse(localStorage.Totalusers);
  ngos.textContent="NGOs = "+JSON.parse(localStorage.Totalngos);
  donors.textContent="Donors = "+JSON.parse(localStorage.Totaldonors);



  let message = document.getElementsByClassName("message")[0];
  let messagebg = document.getElementById("messagebg");
  let fetch = document.getElementById("messagebtn");
  let list = document.getElementById("list");

  // message.classList.add("invisible");
  // messagebg.classList.add("invisible");



  //calculation of pending requests
  let pendingRequests = 0;
  let key = [];
  let type=[];
  let userno=[];
  let listdetails=[];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).slice(0, 4) == "user") {
      if (
        localStorage.getItem(localStorage.key(i)).split(",")[3] == "true" &&
        localStorage.getItem(localStorage.key(i)).split(",")[4] == "false"
      ) {
        pendingRequests++;
        key.push(i);
        if(localStorage.getItem(localStorage.key(i)).split(",")[2]=="true"){
          type.push("donor");
        }else{
          type.push("ngo");
        }
        userno.push(localStorage.key(i).slice(4,localStorage.key(i).length));
        listdetails.push(i);
      }
    }
  }
  localStorage.setItem("listdetails",userno);
  let details=[];
  let order=[];
//getting the details
for(let i=0;i<localStorage.length;i++){
  if(localStorage.key(i).slice(0,11)=="Detailsuser"){
    for(let j=0;j<pendingRequests;j++){
      if(localStorage.key(i).slice(11,localStorage.key(i).length)==userno[j]){
        if(type[j]=="donor"){
          let temp=[];
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[0]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[1]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[2]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[3]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[4]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[5]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[6]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[7]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[8]);
          temp.push("donor");
          temp.push(i);
          details[j]=temp;
          order.push(j);

        }else{
          let temp=[];
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[0]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[1]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[2]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[3]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[4]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[5]);
          temp.push(localStorage.getItem(localStorage.key(i)).split(",")[6]);
          temp.push("");
          temp.push("");
          temp.push("ngo");
          temp.push(i);
          details[j]=temp;
        }  
      
    }

  }
}
}


message.classList.add("invisible");
messagebg.classList.add("invisible");


  document.getElementsByClassName("loginmessage")[0].textContent =
    pendingRequests + " Requests Pending for Verification!";
  // message.classList.remove("invisible");
  // messagebg.classList.remove("invisible");


  fetch.onclick = function () {
    message.classList.add("invisible");
    messagebg.classList.add("invisible");
    for (let i = 0; i < pendingRequests; i++) {
      let li = document.createElement("li");
      if (details[i][9]=="donor") {
        //donor
        li.innerHTML =
        "<ol>DONOR : <ul><li>NAME : " +
        details[i][0] + " " + details[i][1] +
        "</li><li>ADDRESS : " +
        details[i][2] +
        "</li><li>CITY : " +
        details[i][3] +
        "</li><li>STATE : " +
        details[i][4] +
        "</li><li>PINCODE : " +
        details[i][5] +
        "</li><li>CONTACT : " +
        details[i][6] +
        "</li><li>AADHAR NO. : " +
        details[i][7] +
        "</li><li>PAN CARD NO. : " +
        details[i][8] +
        '</li><li><button class="documentsdownloadbtn" disabled>Download the Documents!</button><button class="acceptbtn" id="accept'+i+'" onclick="accept('+i+')">Accept!</button><button class="rejectbtn" id="reject'+i+'" onclick="reject('+i+')">Reject</button></li></ul></ol>';
      list.append(li);
      } else {
        //ngo
        li.innerHTML =
          "<ol>NGO : <ul><li>NAME : " +
          details[i][0] +
          "</li><li>ADDRESS : " +
          details[i][1] +
          "</li><li>CITY : " +
          details[i][2] +
          "</li><li>STATE : " +
          details[i][3] +
          "</li><li>PINCODE : " +
          details[i][4] +
          "</li><li>CONTACT : " +
          details[i][5] +
          "</li><li>DIFFICULTIES FACED BY NGO : " +
          details[i][6] +
          '</li><li><button class="documentsdownloadbtn" disabled>Download the Documents!</button><button class="acceptbtn" id="accept'+i+'" onclick="accept('+i+')">Accept!</button><button class="rejectbtn" id="reject'+i+'" onclick="reject('+i+')">Reject</button></li></ul></ol>';
        list.append(li);
      }
    }
  };

  function logout(){
    localStorage.loggedinas="";
    localStorage.isloggedin="false";
    window.location.replace("/HTML/index.html");
  }


function accept(j){

  document.getElementsByClassName("loginmessage")[0].textContent ="Are You Sure You Want To Proceed With The Approval?";
  document.getElementById("messagebtn").textContent="OK!";
  messagebg.classList.remove("invisible");
  message.classList.remove("invisible");
  document.onkeydown = function (e) {
    return false;
  };
  document.getElementById("messagebtn").addEventListener("click",function(){
    let verifieduser=localStorage.listdetails.split(",")[j];
    let valueofverifieduser=localStorage.getItem("user"+verifieduser);
    valueofverifieduser=valueofverifieduser.split(",");
    valueofverifieduser[4]="true";
    valueofverifieduser[5]="true";
    if(valueofverifieduser[3]=="true"){
      totaldonors++;
      donors++;
    }else{
      totaldonors++;
      ngos++;
    }

    localStorage.Totalusers=totalusers;
    localStorage.Totalngos=ngos;
    localStorage.Totaldonors=donors;
    totalusers.textContent="Total Users = "+JSON.parse(localStorage.Totalusers);
    ngos.textContent="NGOs = "+JSON.parse(localStorage.Totalngos);
    donors.textContent="Donors = "+JSON.parse(localStorage.Totaldonors);

    localStorage.setItem("user"+verifieduser,valueofverifieduser);
    document.getElementById("accept"+j).classList.add("clicked");
    document.getElementById("reject"+j).classList.add("clicked");
    document.onkeydown = function (e) {
      return true;
    };
    messagebg.classList.add("invisible");
    message.classList.add("invisible");
  });
}


function reject(j){



  document.getElementsByClassName("loginmessage")[0].textContent ="Are You Sure You Want To Proceed With The Rejection?";
  document.getElementById("messagebtn").textContent="OK!";
  messagebg.classList.remove("invisible");
  message.classList.remove("invisible");
  document.onkeydown = function (e) {
    return false;
  };
  document.getElementById("messagebtn").addEventListener("click",function(){
    let verifieduser=localStorage.listdetails.split(",")[j];
    let valueofverifieduser=localStorage.getItem("user"+verifieduser);
    valueofverifieduser=valueofverifieduser.split(",");
    valueofverifieduser[4]="true";
    valueofverifieduser[6]="true";
    localStorage.setItem("user"+verifieduser,valueofverifieduser);
    document.getElementById("accept"+j).classList.add("clicked");
    document.getElementById("reject"+j).classList.add("clicked");
    document.onkeydown = function (e) {
      return true;
    };
    messagebg.classList.add("invisible");
    message.classList.add("invisible");
  });
}

}
