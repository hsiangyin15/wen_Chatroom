var addbtn = document.getElementById('add_btn');
var sendbtn = document.getElementById('send_btn');
var sendmsg = document.getElementById('text_input');
var $show = $('#show');
var currentROOMtag = firebase.database().ref('currentROOM');
var roomNAMElist = firebase.database().ref('room_list');
var pri_chat = firebase.database().ref('private_list');
var chorme_list = firebase.database().ref('note_list');
var current_room = '';
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

var time = new Date();
m = time.getMonth() + 1;
d = time.getDate();
h = time.getHours();
n = time.getMinutes();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    sendbtn.addEventListener('click', function() {
      if (sendmsg.value != "") {
        pri_chat.push({
          email: user.email,
          pushname: firebase.auth().currentUser.displayName,
          message: sendmsg.value,
          time: m + '/' + d + ' ' + h + ':' + n,
          roomid: current_room
        });
        sendmsg.value = "";
      }
    });
    stickerbtn1.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/1.png",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });


    stickerbtn2.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/2.jpeg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });

    stickerbtn3.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/3.png",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn4.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/4.jpeg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn5.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/5.png",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn6.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/6.jpg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn7.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/7.jpg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn8.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/8.jpg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn9.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/9.jpeg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn10.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/10.jpg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    stickerbtn11.addEventListener('click', function() {
      pri_chat.push({
        email: user.email,
        pushname:firebase.auth().currentUser.displayName,
        img_src:"css/images/11.jpg",
        time: m + '/' + d + ' ' + h + ':' + n,
        roomid: current_room
      });
    });
    roomNAMElist.once('value', function(snapshot) {
      for (var i in snapshot.val()) {
        console.log(snapshot.val()[i].roomname);
        if (snapshot.val()[i].roomname === current_room) {
          if (snapshot.val()[i].roommaster) {
            if (snapshot.val()[i].roommaster !== firebase.auth().currentUser.email) {
              console.log('case1');
              console.log(firebase.auth().currentUser.email + 'inROOM roommaster:' + snapshot.val()[i].roommaster);
              chorme_list.push({
                reciever: snapshot.val()[i].roommaster,
                room: current_room
              });
            }
          }


          if (snapshot.val()[i].sharemaster) {
            console.log('shareto:' + snapshot.val()[i].sharemaster);
            if (snapshot.val()[i].sharemaster !== firebase.auth().currentUser.email) {
              console.log('case2');
              chorme_list.push({
                reciever: snapshot.val()[i].sharemaster,
                room: current_room
              });
            }

          }

        }
      }
    });
  }
});





//每一次資料庫有變動時，獲取最新一筆內容呈現
pri_chat.limitToLast(1).on('value', function(snapshot) {
  for (var i in snapshot.val()) {
    if (snapshot.val()[i].roomid === current_room) {
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


currentROOMtag.once('value', function(snapshot) {
  for (var i in snapshot.val()) {
    if (snapshot.val()[i].choose === "yes") {
      current_room = snapshot.val()[i].name;
      console.log(current_room);

    }
  }
}).then(function() {
  addbtn.addEventListener('click', function() {
    var add_name = prompt("Please enter your friend's email :)", "")
    console.log(add_name);

    roomNAMElist.push({
      sharemaster: add_name,
      roomname: current_room
    });


  });


  pri_chat.once('value', function(snapshot) {
    $show.html('');
    document.getElementById('indexword').innerHTML=document.getElementById('indexword').innerHTML+" ["+current_room+"]";
    for (var i in snapshot.val()) {
      if (snapshot.val()[i].roomid === current_room) {
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

    }
  });
})
