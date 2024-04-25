import fetch from "node-fetch"
 
const url = 'https://render.com/api/users/login';
const credentials = {
  "email": "sarahdoe@example.com",
  "password": "adminPassword123"
};
 
fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
})
.then(response => response.json())
.then(data => {
    console.log('Access Token:', data.access_token);
})
.catch(error => {
    console.error('Error:', error);
});