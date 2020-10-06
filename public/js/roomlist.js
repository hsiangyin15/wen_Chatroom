var $showroom = $('#showroom');



var roomNAMElist = firebase.database().ref('room_list');
var currentROOMtag = firebase.database().ref('currentROOM');
var checkmaster = '';
var remember;
currentROOMtag.remove();



firebase.auth().onAuthStateChanged(function(user) {
  console.log(user.email)
  checkmaster = user.email;
});


var btnLogout = document.getElementById('logout_btn');
btnLogout.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    window.location.href = "index.html";
  }).catch(function() {
    alert("Logout error!");
  });
});

roomNAMElist.once('value', function(snapshot) {
  $showroom.html('');
  console.log("hi1");

  for (var i in snapshot.val()) {
    if (snapshot.val()[i].roommaster === checkmaster || snapshot.val()[i].sharemaster === checkmaster) {
      console.log(snapshot.val()[i].roommaster)
      remember = snapshot.val()[i].roomname;

      $showroom.append('<button class="enterROOMbtn" id="tempID">' + snapshot.val()[i].roomname + '</button>' + '<br>');

      $("#tempID").attr("id", remember);

    }
  }
}).then(function() {
  var userSelection = document.getElementsByClassName('enterROOMbtn');

  for(var i = 0; i < userSelection.length; i++) {
    (function(index) {
      userSelection[index].addEventListener("click", function() {
         console.log("Clicked index: " + index);
         console.log("Clicked index: " + this.id);
         var current_roomname = document.getElementById(this.id).innerHTML;

         currentROOMtag.push({
           choose: "yes",
           name: current_roomname
         });
         window.location.href = "privateroom.html";
       })
    })(i);
  }

})
