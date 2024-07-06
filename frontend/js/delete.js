let deleteUser = document.getElementById('deleteUser');
let res = document.getElementById('res');

// Delete User by ID when the button is clicked
deleteUser.addEventListener('click', ()=>{
    let idUser = Number(document.getElementById('idUser').value); // User ID is collected from input

    fetch(`http://localhost:8080/users/${idUser}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then(answer => answer.json())
    .then(data => {
        res.innerHTML = "User deleted succesfully!";

        // Output style
        res.style.color = "white";
        res.style.fontSize = "1.3em";
        res.style.textAlign = "left";
        res.style.backgroundColor = "rgb(74, 74, 190)";
        res.style.border = "2px solid black"
        res.style.padding = "20px";
        res.style.margin = "auto";
        res.style.width = "233px";
    })
    .catch((err) => console.error("Failed to delete the user", err));
});

// Mechanism that blocks right mouse clicking on the page
document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});
