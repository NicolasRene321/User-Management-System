let menu = document.getElementById('menu');
let divCenterButtons = document.getElementById('center-buttons-index');
let divRightButton = document.getElementById('right-button-index');

// On mobile screen or small screens when the menu button is clicked, it hides or shows option menu
menu.addEventListener('click', ()=>{ 
    if (divCenterButtons.style.display == 'flex') {
        divCenterButtons.style.display = 'none';    
    } else {
        divCenterButtons.style.display = 'flex';  
    }

    if (divRightButton.style.display == 'flex') {
        divRightButton.style.display = 'none';    
    } else {
        divRightButton.style.display = 'flex';  
    }
});
