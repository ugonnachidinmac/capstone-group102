const url = "https://agritechlink-backend.onrender.com/api/users";

const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", register);

function register(event) {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const userData = {
    name: fullName,
    email: email,
    password: password,
    jobTitle: jobTitle,
    phoneNumber: phoneNumber,
  };

  // Create loading spinner element
  const loadingSpinner = document.createElement("div");
  loadingSpinner.className = "spinner";

  // Replace the button with the spinner
  registerButton.style.display = "none";
  registerButton.parentNode.appendChild(loadingSpinner);

  fetch(`${url}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "/index.html";
      // alert("Successfully Registered");
    })
    .catch((error) => {
      console.error("Error", error);
      alert("Registration failed " + error.message);
    })
    .finally(() => {
      // Hide the spinner and show the button again
      loadingSpinner.remove();
      registerButton.style.display = "inline-block";
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("jobTitle").value = "";
      document.getElementById("phoneNumber").value = "";
    });
}
/*login function*/
fetch(`${url}/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userData),
})
  .then((response) => {
    if (!response.ok) {
      // If the response status is not okay, handle the error
      return response.json().then((errorData) => {
        // Parse the JSON error data
        throw new Error(
          `Server error: ${errorData.error}. Status: ${errorData.status}`
        );
      });
    }
    return response.json(); // If response is okay, parse JSON
  })
  .then((data) => {
    // Maintain the URL change
    window.location.href = "/html/farmerhomepg.html";
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
registerButton.addEventListener("click", register);
loginButton.addEventListener("click", login);

// function login(event) {
//   event.preventDefault();
//   let loginEmail = document.getElementById("loginEmail").value;
//   let loginPassword = document.getElementById("loginPassword").value;
//   const userData = {
//     email: loginEmail,
//     password: loginPassword,
//   };
//   console.log(userData);
//   fetch(`${url}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // return response.json();
//         console.log("God is good");
//       } else {
//         console.log("Who is this");
//       }
//     })
//     .then((data) => {
//       // window.location.href = "/html/farmerhomepg.html";
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error", error);
//     });
// }

// store table
function addProduct(event) {
  event.preventDefault(); // Prevent form submission

  var texts1 = document.getElementById("text1").value;
  var texts2 = document.getElementById("text2").value;
  var texts3 = document.getElementById("text3").value;
  var date = new Date().toDateString();

  var table = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];
  var row = table.insertRow();

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = texts1;
  cell2.innerHTML = texts2;
  cell3.innerHTML = texts3;
  cell4.innerHTML = date;
}

/*document.getElementById("formsignup").addEventListener("submit", function(event)
{
    event.preventDefault();
    console.log("click")
    let fullName = document.getElementById("fullName").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let jobTitle = document.getElementById("jobTitle").value;
let phoneNumber = document.getElementById("phoneNumber").value;
const url = "https://agritechlink-backend.onrender.com/api/users/register";

if(fullName === "" || email === "" || password === "" || jobTitle === "" || phoneNumber === "") {
    document.getElementById('errorMessage').textContent = 'Please fill all the values.';
    } else {
    
     const data = {
          fullName: fullName,
          email: email,
          password: password,
          jobTitle: jobTitle ,
          phoneNumber: phoneNumber
        };

        fetch("https://agritechlink-backend.onrender.com/api/users/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(responds=>{
            if (responds.ok){
                alert("succefully signed")
                window.location.href="index.html"
            }else{
                throw new Error("sign up failed")
            }
        })
        .catch(error=> console.error("Error:", error))
    }
})*/

/*popup script for index*/
function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
function togglee() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popupp = document.getElementById("popupp");
  popupp.classList.toggle("active");
}
function togglex() {
  var blurx = document.getElementById("blurx");
  blurx.classList.toggle("active");
  var popupx = document.getElementById("popupx");
  popupx.classList.toggle("active");
}
function toggleb2b() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var signuppopupp = document.getElementById("signuppopupp");
  signuppopupp.classList.toggle("active");
  var popup = document.getElementById("popupp");
  popup.style.display = "none";
}
function closeButton() {
  // Your close functionality here
  // For example, hide an element
  const button = document.getElementById("closeButton");
  button.parentNode.style.display = "none"; // Hides the parent element of the button
}

/*popup script for for marketplc*/
function martoggle() {
  var marblur = document.getElementById("marblur");
  marblur.classList.toggle("active");
  var marpopup = document.getElementById("marpopup");
  marpopup.classList.toggle("active");
}
function martogglee() {
  var marblur = document.getElementById("marblur");
  blur.classList.toggle("active");
  var marpopupp = document.getElementById("marpopupp");
  marpopupp.classList.toggle("active");
}
function martogglex() {
  var marblurx = document.getElementById("marblurx");
  marblurx.classList.toggle("active");
  var marpopupx = document.getElementById("marpopupx");
  marpopupx.classList.toggle("active");
}
function martoggleb2b() {
  var marblur = document.getElementById("marblur");
  marblur.classList.toggle("active");
  var marsignuppopupp = document.getElementById("marsignuppopupp");
  marsignuppopupp.classList.toggle("active");
  var marpopup = document.getElementById("marpopupp");
  marpopup.style.display = "none";
}
function marcloseButton() {
  // Your close functionality here
  // For example, hide an element
  const marbutton = document.getElementById("marcloseButton");
  marbutton.parentNode.style.display = "none"; // Hides the parent element of the button
}

/*Validation of form*/

/*function validateForm() {

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailRegex.test(email)) {

        alert("Please enter a valid email address.");

        return false;

    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters long.");

        return false;

    }


    return true;

}*/

/*table script*/

/// Function to handle row deletion
function handleRowDeletion(rowId) {
  var row = document.getElementById(rowId);
  if (row) {
    row.remove();
  }
}
// Get all delete icons with class "deleteIcon"
var deleteIcons = document.querySelectorAll(".deleteIcon");

// Add click event listener to each delete icon
deleteIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    var rowId = this.getAttribute("data-row-id");
    handleRowDeletion(rowId);
  });
});

/*login and signup script*/

// const signupForm = document.getElementById('formsignup');

/*signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const jobTitle = document.getElementById('job').value;
    const email = document.getElementById('email').value;
    const phoneNo = document.getElementById('number').value;
    const password = document.getElementById('password').value;

    try{
        const response = await fetch('https://agritechlink-backend.onrender.com/api/users/register',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobTitle, email, phoneNo, password })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }

});*/

// all
// Get the elements
/*const signupButton = document.querySelector('.nav-button .btn:last-of-type a');
const loginButton = document.querySelector('.nav-button .btn:first-of-type a');
const farmerExploreLink = document.getElementById('farmerexplore');
const signupForm = document.getElementById('formsignup');
const loginPopup = document.getElementById('popup');

// Add event listener to the signup button
signupButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleSignupPopup(); // Toggle signup popup
});

// Add event listener to the login button
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleLoginPopup(); // Toggle login popup
});

// Add event listener to the farmerexplore link
farmerExploreLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    signupForm.style.display = 'block'; // Display the signup form
    closeLoginPopup(); // Close login popup if open
});*/

// Function to toggle the signup popup
function toggleSignupPopup() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popupp = document.getElementById("popupp");
  popupp.classList.toggle("active");
}

// Function to toggle the login popup
function toggleLoginPopup() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

// Function to close the signup form
function closeSignupForm() {
  signupForm.style.display = "none";
}

// Function to close the login popup
function closeLoginPopup() {
  loginPopup.style.display = "none";
}

// onboarding form

/*// Get the elements
const farmerExploreLink = document.getElementById('farmerexplore');
const signupForm = document.getElementById('formsignup');

// Add event listener to the farmerexplore link
farmerExploreLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    signupForm.style.display = 'block'; // Display the signup form
});

// Function to close the signup form
function closeSignupForm() {
    signupForm.style.display = 'none';
}*/

// const form1 = document.querySelector('.form');

// form1.addEventListener('submit', event => {
//     event.preventDefault();

//     const formData = new FormData(form1);
//     const data = new URLSearchParams(formData);

//     fetch('https://agritechlink-backend.onrender.com/api/users/register', {
//         method: 'POST',
//         body: data
//     }).then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error));

// })

// script for Market place and Training
// Get the div element
// Get the div element
// const asideContent = document.getElementById('asideContent');

// // Function to change background color when hovered
// function changeBackgroundColor() {
//     asideContent.style.backgroundColor = 'lightblue'; // Change to your desired color
// }

// // Function to revert background color when not hovered
// function revertBackgroundColor() {
//     asideContent.style.backgroundColor = ''; // Revert to default
// }

//hjgj
// // // Add event listeners for hover
// // asideContent.addEventListener('mouseover', changeBackgroundColor);
// // asideContent.addEventListener('mouseout', revertBackgroundColor);

// const asideContent = document.getElementById('asideContent');
// const link = asideContent.querySelector('.link');
// const icon = asideContent.querySelector('.icons');

// // Function to change background color of <div> when hovered
// function changeBackgroundColor() {
//     asideContent.style.backgroundColor = 'lightblue'; // Change to your desired color
// }

// // Function to revert background color of <div> when not hovered
// function revertBackgroundColor() {
//     asideContent.style.backgroundColor = ''; // Revert to default
// }

// // Function to change font color of <a> when focused
// function changeFontColor() {
//     link.style.color = 'red'; // Change to your desired color
// }

// // Function to revert font color of <a> when focus is lost
// function revertFontColor() {
//     link.style.color = ''; // Revert to default
// }

// // Function to change color of <i> when focused
// function changeIconColor() {
//     icon.style.color = 'green'; // Change to your desired color
// }

// // Function to revert color of <i> when focus is lost
// function revertIconColor() {
//     icon.style.color = ''; // Revert to default
// }

// // Add event listeners for hover on <div>
// asideContent.addEventListener('mouseover', changeBackgroundColor);
// asideContent.addEventListener('mouseout', revertBackgroundColor);

// // Add event listeners for focus on <a> and <i>
// link.addEventListener('focus', changeFontColor);
// link.addEventListener('blur', revertFontColor);

// icon.addEventListener('focus', changeIconColor);
// icon.addEventListener('blur', revertIconColor);

//gty
// const asideContent = document.getElementById('asideContent');
// const link = asideContent.querySelector('.link');
// const icon = asideContent.querySelector('.icons');

// function changeBackgroundColor() {
//     asideContent.style.backgroundColor = 'lightblue';
// }

// function revertBackgroundColor() {
//     asideContent.style.backgroundColor = '';
// }

// function changeFontColor() {
//     link.style.color = 'red';
// }

// function revertFontColor() {
//     link.style.color = '';
// }

// function changeIconColor() {
//     icon.style.color = 'green';
// }

// function revertIconColor() {
//     icon.style.color = '';
// }

// // Event listeners for focus on <a> and <i>
// link.addEventListener('focus', changeFontColor);
// link.addEventListener('blur', revertFontColor);

// icon.addEventListener('focus', changeIconColor);
// icon.addEventListener('blur', revertIconColor);

//dgd
// let myDiv = document.getElementById('diving');

// myDiv.addEventListener('mouseover', () => {
//     myDiv.style.backgroundColor = 'red';
// });

// myDiv.addEventListener('mouseleave', () => {
//     myDiv.style.backgroundColor = 'blue';
// });

let myDiv2 = document.getElementById("asideContent");

myDiv2.addEventListener("mouseover", () => {
  myDiv2.style.backgroundColor = "rgb(46, 153, 0)";
});

myDiv2.addEventListener("mouseleave", () => {
  myDiv2.style.backgroundColor = "";
});
