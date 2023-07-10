
const firebaseConfig = {
  apiKey: "AIzaSyDKfDoUz0f49_ZB8E9n3KuaBgU1Zkv8iTk",
  authDomain: "letschat-97355.firebaseapp.com",
  projectId: "letschat-97355",
  storageBucket: "letschat-97355.appspot.com",
  messagingSenderId: "209647345753",
  appId: "1:209647345753:web:cdce4a67470dccfd865148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}