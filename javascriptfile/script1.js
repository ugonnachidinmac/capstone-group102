// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQUYPY2ZbIGIchk5INDtEdrX_5ZY2Bfg",
  authDomain: "admin-firebase-68bf0.firebaseapp.com",
  projectId: "admin-firebase-68bf0",
  storageBucket: "admin-firebase-68bf0.appspot.com",
  messagingSenderId: "175452716758",
  appId: "1:175452716758:web:f58a449ba1219b8cccd377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account Created...")
      window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});