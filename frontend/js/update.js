let updateUser = document.getElementById('updateUser');
let idUser = document.getElementById('idUser')
let res = document.getElementById('res');
let name = "";
let age = 0;
let nameUser = document.getElementById('nameUser');
let ageUser = document.getElementById('ageUser');

// When User ID is entered on input, User data is searched automatically
idUser.addEventListener('input', ()=>{
    let idUser = Number(document.getElementById('idUser').value);
    fetch(`http://localhost:8080/users/${idUser}`)
    .then(answer => answer.json())
    .then(data => {

        // Name and Age are inserted on inputs when User ID is entered
        nameUser.value = data.name;
        ageUser.value = data.age;    
    })
    .catch((err) => console.error("Failed to search the user", err))
});

// Update User when the button is clicked
updateUser.addEventListener('click', ()=>{
    // User data is collected and storaged
    let idUser = Number(document.getElementById('idUser').value);
    let nameUser = document.getElementById('nameUser').value;
    let ageUser = Number(document.getElementById('ageUser').value);

    const data = {
        name: nameUser,
        age: ageUser
    }

    // The upgrade process in MySQL starts here
    fetch(`http://localhost:8080/users/${idUser}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(answer => answer.json())
    .then(data => {
        res.innerHTML = "User updated succesfully!";

        // Output style
        res.style.color = "white";
        res.style.fontSize = "1.3em";
        res.style.textAlign = "left";
        res.style.backgroundColor = "rgb(74, 74, 190)";
        res.style.border = "2px solid black"
        res.style.padding = "20px";
        res.style.margin = "auto";
        res.style.width = "240px";
    })
    .catch((err) => console.error("Failed to update user!", err));
});

// Mechanism that blocks right mouse clicking on the page
document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});