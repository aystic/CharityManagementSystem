if (localStorage.loggedinas != "admin") {
  window.location.replace("/HTML/signin.html");
} else {
  document.querySelector("video").play();
  document.querySelector("video").playbackRate = 3;

  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      setTimeout(function () {
        // document.querySelector("body").classList.add("invisible");
        document.querySelector(".loader").classList.add("fadeloader");
      }, 200);
      setInterval(() => {
        document.querySelector(".loader").classList.add("invisible");
        // document.querySelector("body").classList.remove("invisible");
      }, 600);
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

  let message = document.getElementsByClassName("message")[0];
  let messagebg = document.getElementById("messagebg");
  let fetch = document.getElementById("fetchbtn");
  let btn = document.getElementById("messagebtn");
  let initialbtn = document.getElementById("initialbutton");
  btn.classList.add("invisible");
  initialbtn.classList.add("invisible");
  let list = document.getElementById("list");

  //calculation of pending requests
  let pendingRequests = 0;
  let key = [];
  let type = [];
  let userno = [];
  let listdetails = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).slice(0, 4) == "user") {
      if (
        localStorage.getItem(localStorage.key(i)).split(",")[3] == "true" &&
        localStorage.getItem(localStorage.key(i)).split(",")[4] == "false"
      ) {
        pendingRequests++;
        let usernumber = localStorage
          .key(i)
          .slice(4, localStorage.key(i).length);
        key.push(usernumber + String(i));
        if (localStorage.getItem(localStorage.key(i)).split(",")[2] == "true") {
          type.push(String(usernumber) + "donor");
        } else {
          type.push(String(usernumber) + "ngo");
        }
        userno.push(usernumber);
        // listdetails.push(i);
      }
    }
  }
  key.sort();
  type.sort();
  userno.sort();
  // localStorage.setItem("test",type)

  localStorage.setItem("listdetails", userno);

  // localStorage.setItem("test",details)
  // message.classList.add("invisible");
  // messagebg.classList.add("invisible");

  if (pendingRequests == 0) {
    document.getElementsByClassName("loginmessage")[0].textContent =
      "No Requests Pending for Verification!";
    document.getElementById("messagecrossbtn").classList.add("invisible");
    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    fetch.classList.add("invisible");
    btn.classList.add("invisible");
    initialbtn.classList.remove("invisible");
    initialbtn.addEventListener("click", function () {
      refreshdashboard("print");
      document.onkeydown = function (e) {
        return true;
      };
      messagebg.classList.add("invisible");
      message.classList.add("invisible");
    });
  } else {
    document.getElementsByClassName("loginmessage")[0].textContent =
      pendingRequests + " Request(s) Pending for Verification!";
    document.getElementById("messagecrossbtn").classList.add("invisible");

    message.classList.remove("invisible");
    messagebg.classList.remove("invisible");
    fetch.classList.remove("invisible");
    btn.classList.add("invisible");
    initialbtn.classList.add("invisible");
    fetch.onclick = function () {
      document.getElementById("head").textContent =
        "Pending Verification Requests :";
      refreshdashboard("print");
      message.classList.add("invisible");
      messagebg.classList.add("invisible");
      let details = [];

      //getting the details

      for (let i = 0; i < pendingRequests; i++) {
        for (let j = 0; j < localStorage.length; j++) {
          if (localStorage.key(j).slice(0, 11) == "Detailsuser") {
            if (
              localStorage.key(j).slice(11, localStorage.key(j).length) ==
              userno[i]
            ) {
              if (type[i].slice(1, type[i].length) == "donor") {
                let temp = [];
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[0]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[1]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[2]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[3]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[4]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[5]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[6]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[7]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[8]
                );
                temp.push("donor");
                temp.push(i);
                details[userno[i]] = temp;
                // details[userno[j]] = temp;
                // details[j] = temp;
              } else {
                let temp = [];
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[0]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[1]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[2]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[3]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[4]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[5]
                );
                temp.push(
                  localStorage.getItem(localStorage.key(j)).split(",")[6]
                );
                temp.push("");
                temp.push("");
                temp.push("ngo");
                temp.push(i);
                details[userno[i]] = temp;
                // details[userno[j]] = temp;
                // details[j] = temp;
              }
            }
          }
        }
      }
      for (let i = 0; i < pendingRequests; i++) {
        let li = document.createElement("li");
        if (details[userno[i]][9] == "donor") {
          //donor
          li.innerHTML =
            "<ol>DONOR : <ul><li>NAME : " +
            details[userno[i]][0] +
            " " +
            details[userno[i]][1] +
            "</li><li>ADDRESS : " +
            details[userno[i]][2] +
            "</li><li>CITY : " +
            details[userno[i]][3] +
            "</li><li>STATE : " +
            details[userno[i]][4] +
            "</li><li>PINCODE : " +
            details[userno[i]][5] +
            "</li><li>CONTACT : " +
            details[userno[i]][6] +
            "</li><li>AADHAR NO. : " +
            details[userno[i]][7] +
            "</li><li>PAN CARD NO. : " +
            details[userno[i]][8] +
            '</li><li><button class="documentsdownloadbtn" >Download the Documents!</button><button class="acceptbtn" id="accept' +
            userno[i] +
            '" onclick="accept(' +
            userno[i] +
            ')">Accept!</button><button class="rejectbtn" id="reject' +
            userno[i] +
            '" onclick="reject(' +
            userno[i] +
            ')">Reject</button></li></ul></ol>';
          list.append(li);
        } else {
          //ngo
          li.innerHTML =
            "<ol>NGO : <ul><li>NAME : " +
            details[userno[i]][0] +
            "</li><li>ADDRESS : " +
            details[userno[i]][1] +
            "</li><li>CITY : " +
            details[userno[i]][2] +
            "</li><li>STATE : " +
            details[userno[i]][3] +
            "</li><li>PINCODE : " +
            details[userno[i]][4] +
            "</li><li>CONTACT : " +
            details[userno[i]][5] +
            "</li><li>DIFFICULTIES FACED BY NGO : " +
            details[userno[i]][6] +
            '</li><li><button class="documentsdownloadbtn">Download the Documents!</button><button class="acceptbtn" id="accept' +
            userno[i] +
            '" onclick="accept(' +
            userno[i] +
            ')">Accept!</button><button class="rejectbtn" id="reject' +
            userno[i] +
            '" onclick="reject(' +
            userno[i] +
            ')">Reject</button></li></ul></ol>';
          list.append(li);
        }
      }
    };
    function accept(j) {
      document.getElementsByClassName("loginmessage")[0].textContent =
        "Are You Sure You Want To Proceed With The Approval?";
      document.getElementById("messagecrossbtn").classList.remove("invisible");
      fetch.classList.add("invisible");
      initialbtn.classList.add("invisible");
      btn.classList.remove("invisible");
      messagebg.classList.remove("invisible");
      message.classList.remove("invisible");
      document.onkeydown = function (e) {
        return false;
      };
      btn.addEventListener("click", function () {
        let verifieduser = j;
        let valueofverifieduser = localStorage.getItem("user" + verifieduser);
        valueofverifieduser = valueofverifieduser.split(",");
        valueofverifieduser[4] = "true";
        valueofverifieduser[5] = "true";
        if (valueofverifieduser[2] == "true") {
          refreshdashboard("donor");
        } else if (valueofverifieduser[2] == "false") {
          refreshdashboard("ngo");
        }

        localStorage.setItem("user" + verifieduser, valueofverifieduser);
        document.getElementById("accept" + j).classList.add("clicked");
        document.getElementById("reject" + j).classList.add("clicked");
        document.onkeydown = function (e) {
          return true;
        };
        window.location.reload();
      });
    }

    function reject(j) {
      document.getElementsByClassName("loginmessage")[0].textContent =
        "Are You Sure You Want To Proceed With The Rejection?";
      document.getElementById("messagecrossbtn").classList.remove("invisible");
      fetch.classList.add("invisible");
      initialbtn.classList.add("invisible");
      btn.classList.remove("invisible");
      messagebg.classList.remove("invisible");
      message.classList.remove("invisible");
      document.onkeydown = function (e) {
        return false;
      };
      btn.addEventListener("click", function () {
        let verifieduser = j;
        let valueofverifieduser = localStorage.getItem("user" + verifieduser);
        valueofverifieduser = valueofverifieduser.split(",");
        valueofverifieduser[4] = "true";
        valueofverifieduser[6] = "true";
        localStorage.setItem("user" + verifieduser, valueofverifieduser);
        document.getElementById("accept" + j).classList.add("clicked");
        document.getElementById("reject" + j).classList.add("clicked");
        document.onkeydown = function (e) {
          return true;
        };
        window.location.reload();
      });
    }
  }
  function logout() {
    localStorage.loggedinas = "";
    localStorage.isloggedin = "false";
    window.location.replace("/HTML/index.html");
  }
  function messagecrossbtn() {
    messagebg.classList.add("invisible");
    message.classList.add("invisible");
  }

  let totalusers = document.getElementById("total");
  let ngos = document.getElementById("totalngo");
  let donors = document.getElementById("totaldonor");
  function refreshdashboard(type) {
    if (type == "donor") {
      let counttotal = Number(localStorage.Totalusers);
      let countdonor = Number(localStorage.Totaldonors);
      counttotal++;
      countdonor++;
      localStorage.Totalusers = counttotal;
      localStorage.Totaldonors = countdonor;
      totalusers.textContent =
        "Total Users = " + Number(localStorage.Totalusers);
      ngos.textContent = "NGOs = " + Number(localStorage.Totalngos);
      donors.textContent = "Donors = " + Number(localStorage.Totaldonors);
    } else if (type == "ngo") {
      let counttotal = Number(localStorage.Totalusers);
      let countngo = Number(localStorage.Totalngos);
      counttotal++;
      countngo++;
      localStorage.Totalusers = counttotal;
      localStorage.Totalngos = countngo;
      totalusers.textContent =
        "Total Users = " + Number(localStorage.Totalusers);
      ngos.textContent = "NGOs = " + Number(localStorage.Totalngos);
      donors.textContent = "Donors = " + Number(localStorage.Totaldonors);
    } else if (type == "print") {
      totalusers.textContent =
        "Total Users = " + Number(localStorage.Totalusers);
      ngos.textContent = "NGOs = " + Number(localStorage.Totalngos);
      donors.textContent = "Donors = " + Number(localStorage.Totaldonors);
    }
  }
}
