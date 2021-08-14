
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_names' id=" + Room_names +" onclick = 'redirectToRoomName(this.id)' >" + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row;
       //End code
      });});}
getData();


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
        window.location= "index.html" ;
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           Bot : "Welcome"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html" ;
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html" ; 
}