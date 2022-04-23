const ToggleBtn=document.getElementsByClassName("toggle-btn")[0]
const NavLinks=document.getElementsByClassName('links')[0]

ToggleBtn.addEventListener("click", function(){
    if (NavLinks.style.display === "none") {
      NavLinks.style.display = "block";
      } else {
        NavLinks.style.display = "none";
      }
    
});


//     // NavLinks.classList.toggle('active');
