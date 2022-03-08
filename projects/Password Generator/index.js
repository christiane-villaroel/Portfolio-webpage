let paraEls1 = document.getElementById ("passwords-1")
let paraEls2 = document.getElementById ("passwords-2")
let paraEls3 = document.getElementById ("passwords-3")
let paraEls4 = document.getElementById ("passwords-4")

let Button =  document.querySelector("#btns");
let passwords = document.getElementsByClassName("newpasswords")
function genPassword(){
let length = 8; 
let characters = ["%","$","@","!","&","*","#","(","?","a","b","c","d","e","t","q","m","p","A","B","C","D","F","E","G","F","G","H","I","J","K", "L"]
let returnValue = " "

for (let index = 0, n = characters.length; index < characters.length; index++) {
    
   returnValue += characters[Math.floor(Math.random()* n)]
   
}

return paraEls1.textContent = returnValue.substring(0,length)
}

Button.addEventListener("click", function (){
    for(let i =0; i < 4; i ++){
        passwords[i].textContent = returnPassword()
    }
})
function returnPassword(){
    let length = 10; 
let characters = ["%","$","@","!","&","*","#","(","?","a","b","c","d","e","t","q","m","p","A","B","C","D","F","E","G","F","G","H","I","J","K", "L"]
let returnValue = " "

for (let index = 0, n = characters.length; index < characters.length; index++) {
    
   returnValue += characters[Math.floor(Math.random()* n)]
    }

return returnValue.substring(0, length)    
}





