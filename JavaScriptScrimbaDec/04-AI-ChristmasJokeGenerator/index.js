// Initialize a flag to keep track of the animation state
let isOpen = false;

document.getElementById('window-container').addEventListener('click', () => {
    if (!isOpen) {
        getJoke();
        isOpen = true; // Update the flag
    } else {
        // If the doors are open, close them
        document.querySelector('.left-door').style = "animation: left-close 0.3s forwards";
        document.querySelector('.right-door').style = "animation: right-close 0.3s forwards";
        document.querySelector('.joke-display').style = "animation: hide-joke 0.3s forwards";
        isOpen = false; // Update the flag
    }
});

async function getJoke() {
    try{
        let reponse = await fetch('getJoke.php');
        let joke = await reponse.text();
        document.getElementById('joke-display').textContent = joke;
        openDoors();
    }
    catch (error) {
        console.log('Error :', error);
    }
}

function openDoors(){
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards";
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards";
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards";
}