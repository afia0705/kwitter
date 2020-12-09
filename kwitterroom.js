var firebaseConfig = {
    apiKey: "AIzaSyDXprAKhD3VuKWz8vnLL7uUgSSWbusOptU",
    authDomain: "storedata-7c9b8.firebaseapp.com",
    databaseURL: "https://storedata-7c9b8-default-rtdb.firebaseio.com",
    projectId: "storedata-7c9b8",
    storageBucket: "storedata-7c9b8.appspot.com",
    messagingSenderId: "788135330545",
    appId: "1:788135330545:web:20e83a93338dd5d9211f50",
    measurementId: "G-W1FHJ39SY9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitterpage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitterpage.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "login.html";
}
