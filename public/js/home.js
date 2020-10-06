var gbtn = document.getElementById('google_btn');
var cbtn = document.getElementById('create_btn');
var sbtn = document.getElementById('signin_btn');
var input_email = document.getElementById('inputEmail');
var input_password = document.getElementById('inputPassword');

gbtn.addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(feedback) {

    var token = feedback.credential.accessToken;
    var user = feedback.user;
    window.location.href = "lobby.html";
  }).catch(function(error) {
    alert('Oops! Error!')
  });
});

cbtn.addEventListener('click', function() {
  firebase.auth().createUserWithEmailAndPassword(input_email.value, input_password.value).then(function(feedback) {
    input_email.value = "";
    input_password.value = "";
    window.location.href = "lobby.html";
    console.log("Account successfully created!")
  }).catch(function(error) {
    input_email.value = "";
    input_password.value = "";
    alert(error)//'Oops! Please notice that you have to enter the exact passsword of your email!')
  });
});



sbtn.addEventListener('click', function() {
  firebase.auth().signInWithEmailAndPassword(input_email.value, input_password.value).then(function(feedback) {
    window.location.href = "lobby.html";
  }).catch(function(error) {
    input_email.value = "";
    input_password.value = "";
    alert('Oops! Make sure you signed up your account and entered the correct password!')
  });
});
