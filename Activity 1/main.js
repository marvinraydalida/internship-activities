const toggleSwitchContainer = document.getElementById("toggle-container");
const toggleSwitch = document.getElementById("toggle-switch");
const navButtons = document.getElementsByClassName("nav-button");

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
  switchMode(navButtons)
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
  switchMode(navButtons)
  setTimeout(function () {
    event.target.classList.toggle("slide-animate");
  }, 350);
});

function switchMode(node){
    if(node.length !== undefined){
        for(let el of node){
            el.classList.toggle('light-font');
        }
    }
    else {
        node.classList.toggle('light-font');
    }
}