let res = document.getElementById('res');
let search = document.getElementById('search');
let searchUser = document.getElementById('searchUser');

// Search all users when the button is clicked
search.addEventListener('click', ()=>{

    fetch('http://localhost:8080/users')
    .then(answer => answer.json())
    .then(data => {
        res.innerHTML = "<ul>";
        data.forEach(value => {
            res.innerHTML += `<hr><br><li>ID: ${value.id}</li> <li>Name: ${value.name}</li> <li>Age: ${value.age}</li><br>`;
        });
        res.innerHTML += "</ul>";

        // Output style
        res.style.color = "white";
        res.style.fontSize = "1.3em";
        res.style.textAlign = "left";
        res.style.backgroundColor = "rgb(74, 74, 190)";
        res.style.border = "2px solid black"
        res.style.padding = "20px";
        res.style.margin = "auto";
        res.style.width = "200px"
        res.style.borderRadius = "10px";
    })
    .catch((err)=> console.error("There is an error", err));
});

// Search User by ID when the button is clicked
searchUser.addEventListener('click', ()=>{
    let userId = Number(document.getElementById('userId').value); // User ID collected from imput

    fetch(`http://localhost:8080/users/${userId}`)
    .then(answer => answer.json())
    .then(data => {
        res.innerHTML = "ID: " + data.id + 
                        "<br>Name: " + data.name +
                        "<br>Age: " + data.age;
        
        // Output style
        res.style.color = "white";
        res.style.fontSize = "1.3em";
        res.style.textAlign = "left";
        res.style.backgroundColor = "rgb(74, 74, 190)";
        res.style.border = "2px solid black"
        res.style.padding = "20px";
        res.style.margin = "auto";
        res.style.width = "200px";
        res.style.borderRadius = "10px";
    })
    .catch((err) => console.error("User not found!", err))
});

// Mechanism that blocks right mouse clicking on the page
document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});