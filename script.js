// go get the box where we want to put the new name
const nameBox = document.getElementById('the-name');

// go get the input element that has the user input
const myInput = document.getElementById('bobby');

// go get the badly named button for the submit
const button = document.getElementById('bobby-button');

const changeValue = () => {
    // when the user clicks, set the name box's text content to whatever the current value of the input is
    nameBox.textContent = myInput.value
}

// add an event listener to the button
button.addEventListener('click', changeValue);


const nameBox = document.getElementById('the-name');

const myInput = document.getElementById('b');

const button = document.getElementById('bb');


const changeValue = () => {
   nameBox.textContent = myInput.animate
    
}
button.addEventListener('blur' changeValue);
