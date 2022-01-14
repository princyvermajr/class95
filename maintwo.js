var firebaseConfig = {
    apiKey: "AIzaSyCLXttc3BP7J81rxFakJPdxR8N-RucgZgo",
    authDomain: "kwitter-d7540.firebaseapp.com",
    databaseURL: "https://kwitter-d7540-default-rtdb.firebaseio.com",
    projectId: "kwitter-d7540",
    storageBucket: "kwitter-d7540.appspot.com",
    messagingSenderId: "1480381668",
    appId:  "1:1480381668:web:2ed9187b71063afbde88f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("label1").innerHTML="Welcome "+username;

  function room(){
    room_name=document.getElementById("input2").value;
    firebase.database.ref("/").child("room_name").update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }