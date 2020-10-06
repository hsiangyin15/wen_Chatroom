
var logNAME = document.getElementById('login_name');
var saveBTN = document.getElementById('savebtn');
var backBTN = document.getElementById('backbtn');
var newname = document.getElementById('changeNAME');

firebase.auth().onAuthStateChanged(function(user) {
logNAME.innerHTML += user.email;
console.log('before:'+user.email);
console.log(user.displayName);
});


backBTN.addEventListener('click', function() {
  window.location.href = "lobby.html";
});

saveBTN.addEventListener('click', function() {
console.log(newname.value);
console.log(firebase.auth().currentUser);
var user = firebase.auth().currentUser;
if(newname.value!=""){
  user.updateProfile({
   displayName: newname.value
  })
}
console.log('after:'+user.displayName);

newname.value="";
window.alert('Your nickname has been changed successfully!');
});
