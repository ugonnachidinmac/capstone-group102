
/*popup script*/
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}
function togglee(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popupp = document.getElementById('popupp');
    popupp.classList.toggle('active');
}
function togglex(){
    var blurx = document.getElementById('blurx');
    blurx.classList.toggle('active');
    var popupx = document.getElementById('popupx');
    popupx.classList.toggle('active');
}

/*Validation of form*/

function validateForm() {

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

}

/*table script*/

/// Function to handle row deletion
function handleRowDeletion(rowId) {
    var row = document.getElementById(rowId);
    if (row) {
        row.remove();
    }
}
// Get all delete icons with class "deleteIcon"
var deleteIcons = document.querySelectorAll('.deleteIcon');

// Add click event listener to each delete icon
deleteIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        var rowId = this.getAttribute('data-row-id');
        handleRowDeletion(rowId);
    });
});



/*login and signup script*/

const signupForm = document.getElementById('formsignup');

signupForm.addEventListener('submit', async (event) => {
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

});





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

let myDiv2 = document.getElementById('asideContent');

        myDiv2.addEventListener('mouseover', () => {
            myDiv2.style.backgroundColor = 'rgb(46, 153, 0)';
        });

        myDiv2.addEventListener('mouseleave', () => {
            myDiv2.style.backgroundColor = '';
        });