let registerUser = document.getElementById('registerUser');
let res = document.getElementById('res');

// Register User when the button is clicked
registerUser.addEventListener('click', ()=>{

    // Name and Age are collected and storaged from input
    let name = document.getElementById('name').value;
    let age = Number(document.getElementById('age').value);

    const data = {
        name: name,
        age: age
    }
    
    // The storage process in MySQL starts here
    fetch('http://localhost:8080/users', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(answer => answer.json())
    .then(data1 => {
        res.innerHTML = "User registered successfully!";

        // Output style
        res.style.color = "white";
        res.style.fontSize = "1.3em";
        res.style.textAlign = "left";
        res.style.backgroundColor = "rgb(74, 74, 190)";
        res.style.border = "2px solid black"
        res.style.padding = "20px";
        res.style.margin = "auto";
        res.style.width = "270px";
        res.style.borderRadius = "10px";
    })
    .catch((err) => console.error("Failed to register! Try again.", err))
});

// Mechanism that blocks right mouse clicking on the page
document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});