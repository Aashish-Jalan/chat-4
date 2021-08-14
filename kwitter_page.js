//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDx5qD5YV_moEw6P1hDb5O24O-W-ytknig",
      authDomain: "chat-app-fd399.firebaseapp.com",
      databaseURL: "https://chat-app-fd399-default-rtdb.firebaseio.com",
      projectId: "chat-app-fd399",
      storageBucket: "chat-app-fd399.appspot.com",
      messagingSenderId: "790937754527",
      appId: "1:790937754527:web:3b574472c294ce8d45bbaa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });

      document.getElementById("msg").value = "";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
        window.location= "index.html" ;
}
