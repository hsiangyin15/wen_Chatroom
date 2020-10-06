var sendbtn = document.getElementById('send_btn');
var sendmsg = document.getElementById('text_input');
var stickerbtn1 = document.getElementById('s1');
var stickerbtn2 = document.getElementById('s2');
var stickerbtn3 = document.getElementById('s3');
var stickerbtn4 = document.getElementById('s4');
var stickerbtn5 = document.getElementById('s5');
var stickerbtn6 = document.getElementById('s6');
var stickerbtn7 = document.getElementById('s7');
var stickerbtn8 = document.getElementById('s8');
var stickerbtn9 = document.getElementById('s9');
var stickerbtn10= document.getElementById('s10');
var stickerbtn11= document.getElementById('s11');

var $show = $('#show');

var pub_chat = firebase.database().ref('chat_list');
var chorme_list = firebase.database().ref('note_list');

var time = new Date();
m = time.getMonth() + 1;
d = time.getDate();
h = time.getHours();
n = time.getMinutes();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    sendbtn.addEventListener('click', function() {
      if (sendmsg.value != "") {
        pub_chat.push({
          email: user.email,
          pushname:firebase.auth().currentUser.displayName,
          message: sendmsg.value,
          time: m + '/' + d + ' ' + h + ':' + n
        });
        sendmsg.value = "";
      }
    });

    stickerbtn1.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/1.png",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });


    stickerbtn2.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/2.jpeg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });

    stickerbtn3.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/3.png",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn4.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/4.jpeg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn5.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/5.png",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn6.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/6.jpg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn7.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/7.jpg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn8.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/8.jpg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn9.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/9.jpeg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn10.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/10.jpg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });
    stickerbtn11.addEventListener('click', function() {
      pub_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/11.jpg",
        time: m + '/' + d + ' ' + h + ':' + n
      });
    });

  }
});

pub_chat.once('value', function(snapshot) {
  $show.html('');
  for (var i in snapshot.val()) {
    if(snapshot.val()[i].img_src){
      if(snapshot.val()[i].pushname){
        $show.append('</div>' + snapshot.val()[i].pushname + ' says：');
        $show.append($('<img>',{src:snapshot.val()[i].img_src,height:'15vmin'}));
      }
      else{
        $show.append('</div>' + snapshot.val()[i].email + ' says：');
        $show.append($('<img>',{src:snapshot.val()[i].img_src,height:'15vmin'}));
      }
      $show.append('<p id="showtime">' + 'sent at ' + snapshot.val()[i].time + '</p>');
      $show.append('</div>');
    }
    else{
      var rawmessage = snapshot.val()[i].message.replace(/</g, "&lt;");
      if(snapshot.val()[i].pushname){
        $show.append('</div>' + snapshot.val()[i].pushname + ' says：' + rawmessage + ' ');
      }
      else{
        $show.append('</div>' + snapshot.val()[i].email + ' says：' + rawmessage + ' ');
      }
      $show.append('<p id="showtime">' + 'sent at ' + snapshot.val()[i].time + '</p>');
      $show.append('</div>');
    }
  }
});

//每一次資料庫有變動時，獲取最新一筆內容呈現
pub_chat.limitToLast(1).on('value', function(snapshot) {

  for (var i in snapshot.val()) {
    if(snapshot.val()[i].img_src){
      if(snapshot.val()[i].pushname){
        $show.append('</div>' + snapshot.val()[i].pushname + ' says：');
        $show.append($('<img>',{src:snapshot.val()[i].img_src,height:'15vmin'}));
      }
      else{
        $show.append('</div>' + snapshot.val()[i].email + ' says：');
        $show.append($('<img>',{src:snapshot.val()[i].img_src,height:'15vmin'}));
      }
      $show.append('<p id="showtime">' + 'sent at ' + snapshot.val()[i].time + '</p>');
      $show.append('</div>');
    }
    else{
      var rawmessage = snapshot.val()[i].message.replace(/</g, "&lt;");
      if(snapshot.val()[i].pushname){
        $show.append('</div>' + snapshot.val()[i].pushname + ' says：' + rawmessage + ' ');
      }
      else{
        $show.append('</div>' + snapshot.val()[i].email + ' says：' + rawmessage + ' ');
      }
      $show.append('<p id="showtime">' + 'sent at ' + snapshot.val()[i].time + '</p>');
      $show.append('</div>');
    }
  }

});


var btnLogout = document.getElementById('logout_btn');
btnLogout.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
    window.location.href = "index.html";
  }).catch(function() {
    alert("Logout error!");
  });
});



if (window.Notification === 'granted' || Notification.permission === 'granted') {
  console.log('有訊息喔');

  chorme_list.once('value', function(snapshot) {
    for (var i in snapshot.val()) {

      if (snapshot.val()[i].reciever === firebase.auth().currentUser.email ) {

        var notifyConfig = {
          body: 'new message in Room:' + snapshot.val()[i].room , // 設定內容
          icon: 'https://img.icons8.com/dusk/64/000000/sun.png', // 設定 icon
        };
        Notification.requestPermission(function(permission) {
          var notification = new Notification('You got a messenge!', notifyConfig);
        });
        var deletenode = '/note_list/'+i;
        console.log(deletenode);
        firebase.database().ref(deletenode).set({});
      }
    }
  });

}
else{
  Notification.requestPermission(function(permission) {
  // permission 可為「granted」（同意）、「denied」（拒絕）和「default」（未授權）
  // 在這裡可針對使用者的授權做處理
});
}
