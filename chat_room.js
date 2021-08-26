var firebaseConfig = {
    apiKey: "AIzaSyDjWqH1Aa7xBvwHPk2ifWL-3nYLj4zQKKY",
    authDomain: "let-s-chat-f3c70.firebaseapp.com",
    databaseURL: "https://let-s-chat-f3c70-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-f3c70",
    storageBucket: "let-s-chat-f3c70.appspot.com",
    messagingSenderId: "676339765655",
    appId: "1:676339765655:web:7ec0b003c2772e1be5f4d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
        function addRoom() 
        {
               room_name = document.getElementById
               ("room_name").value; firebase.database().ref("/")
               .child(room_name).update({ purpose : "adding room name" });
                localStorage.setItem("room_name", room_name);
                 window.location = "chat_page.html";
               }
               function getData()
                { 
                      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
                       snapshot.forEach(function(childSnapshot)
                        { childKey = childSnapshot.key;
                           Room_names = childKey;
                           console.log("Room Name - " + Room_names);
                            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                             document.getElementById("output").innerHTML += row;
                           }); }); }
  
                           getData();
                            function redirectToRoomName(name)
                             { console.log(name); 
                                localStorage.setItem("room_name", name);
                                 window.location = "chat_page.html"; 
                                }
  
  function logout()
  
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
  }
  
  
  