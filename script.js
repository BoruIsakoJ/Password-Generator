const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1= ""
let password2 =[]
const password1El =document.getElementById("password1-el")
const password2El =document.getElementById("password2-el")


function genPass(){
    for(let i=0;i<15;i++){
        let randomNum = Math.floor(Math.random()*characters.length)
        password1 += characters[randomNum]
    }
    password1El.textContent = password1
    password1=""

    for(let j=0;j<15;j++){
        let randomNum=Math.floor(Math.random()*characters.length)
        password2 += characters[randomNum]
    }
    password2El.textContent =password2
    password2=""
}



function copyPass1(){
    navigator.clipboard.writeText(password1El.innerText)
    alert("Copied: " + password1El.innerText);
}

function copyPass2(){
    navigator.clipboard.writeText(password2El.innerText)
    alert("Copied: "+password2El.innerText)
}
