const menu = document.querySelector(".menu");// Creates an html object in JS  of html element that has class of .menu (which is the ul tag in this case)
const menuItems = document.querySelectorAll(".menuItem"); // Stores all links with menuItem class in an array[a.menuItem,...]
const hamburger =  document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(){
    if(menu.classList.contains("showMenu")){ // If the menu contains the showMenu class, we remove it to hide the menu. We also toggle the display to hide the close icon and show the menu icon.
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block"; 
    }else{
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none"
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener("click", toggleMenu)
    }
)