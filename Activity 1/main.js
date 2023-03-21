const toggleSwitchContainer = document.getElementById("toggle-container");
const toggleSwitch = document.getElementById("toggle-switch");
const navButtons = document.getElementsByClassName("nav-button");
const menuButton = document.querySelector('#menu-button i');
const closeMenuButton = document.querySelector("#close-menu i");
const sideMenu = document.getElementById("side-menu");

toggleSwitchContainer.addEventListener("click", (event) => {
  event.target.classList.toggle("slide");
  event.target.children[0].classList.toggle("slide-animate");
  event.target.children[0].classList.toggle("light");
  document.body.classList.toggle("light-bg");
  if (event.target.children[0].classList.contains("light")) {
    event.target.style.backgroundColor = "#424242";
    event.target.style.borderColor = "#dbdbdb";
  } else {
    event.target.style.backgroundColor = "#E5E5E5";
    event.target.style.borderColor = "#B4B4B4";
  }
  switchMode(menuButton);
  switchMode(navButtons);
  switchMode(sideMenu);
  setTimeout(function () {
    event.target.children[0].classList.toggle("slide-animate");
  }, 350);
});

toggleSwitch.addEventListener("click", (event) => {
  event.target.parentNode.classList.toggle("slide");
  event.target.classList.toggle("slide-animate");
  event.target.classList.toggle("light");
  document.body.classList.toggle("light-bg");
  if (event.target.classList.contains("light")) {
    event.target.parentNode.style.backgroundColor = "#424242";
    event.target.parentNode.style.borderColor = "#dbdbdb";
  } else {
    event.target.parentNode.style.backgroundColor = "#E5E5E5";
    event.target.parentNode.style.borderColor = "#B4B4B4";
  }
  switchMode(menuButton);
  switchMode(navButtons);
  switchMode(sideMenu);
  setTimeout(function () {
    event.target.classList.toggle("slide-animate");
  }, 350);
});

menuButton.addEventListener("click", (event) => {
    sideMenu.classList.toggle("side-menu-show");
});

closeMenuButton.addEventListener("click", (event) => {
    sideMenu.classList.toggle("side-menu-show");
});

function switchMode(node){

    if(node.length !== undefined){
        for(let el of node){
            el.classList.toggle('light-font');
        }
    }
    else {
        if(node.id === "side-menu") 
            node.classList.toggle("light-side-menu");
        node.classList.toggle('light-font');
    }
}