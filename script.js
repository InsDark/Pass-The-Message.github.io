//Past The Message JS
let nameMessage = document.querySelector('#nameMessage'); 
let message = document.querySelector('#message'); 
message.textContent = 'HELLO WORLD';


const sendMessage = () => {
    message.textContent = nameMessage.value.toUpperCase();
    nameMessage.value ="";
    if (message.textContent === '') {
        let errorMessage = document.querySelector('#errorMessage').classList.add('show')
    } else if (message.textContent !== '') {
        errorMessage.classList.remove('show'); 
         
    }
}