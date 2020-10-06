

var roommsg = document.getElementById('roomname');
var createbtn = document.getElementById('create_btn');



/*********** CREATE ROOM *************/

var roomNAMElist = firebase.database().ref('room_list');
firebase.auth().onAuthStateChanged(function(user) {

  createbtn.addEventListener('click', function() {
    if (roommsg.value != "") {
      roomNAMElist.push({
        roommaster:user.email,
        roomname: roommsg.value
      });
      window.location.href = "roomlist.html";
      roommsg.value = "";

    }

  });
});



var btnLogout = document.getElementById('logout_btn');
btnLogout.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    window.location.href = "index.html";
  }).catch(function() {
    alert("Logout error!");
  });
});
