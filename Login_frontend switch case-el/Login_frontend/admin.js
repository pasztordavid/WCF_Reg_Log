let idInput = document.getElementById("idNum");
let torolGomb = document.getElementById("torolButton");
torolGomb.addEventListener("click", ()=>{
  let id = idInput.value;
  id = Number(id);  
  axios.delete(`https://localhost:5001/api/Users/DeleteUser?id=${id}`, 
{
    id: id
})
    .then((response) => {
      alert('Delete successful');
    })
    .catch(error=>{
      console.log(error);
    })
})


// api url
const api_url =
  "https://localhost:5001/api/Users/GetUser";

// Defining async function
async function getapi(url) {
  
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab =
    `<tr>
    <th>Id</th>
    <th>User Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Full Name</th>
    <th>Active</th>
    <th>Rank</th>
    <th>Ban</th>
    </tr>`;
  
  // Loop to access all rows
  for (let r of data) {
    tab += `<tr>
    <td>${r.id} </td>
  <td>${r.uname} </td>
  <td>${r.email}</td>
  <td>${r.pwd}</td>
  <td>${r.fullname}</td>    
  <td>${r.active}</td>    
  <td>${r.rank}</td>    
  <td>${r.ban}</td>    
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}

        