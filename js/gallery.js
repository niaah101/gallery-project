//Toggle for hamburger menu

function myFunction() {
  
  let navmenu = document.getElementById('menuLinks');

  if (navmenu.style.display === "block") {
    navmenu.style.display = "none";
  } else {
    navmenu.style.display = "block";
  }
}


//Old toggle code ran but didn't do what I wanted for this assignment. Keeping here for future reference.
/*let hamburger = document.getElementById('hamburger')
let navmenu = document.getElementById('menu-links')

hamburger.onclick = function() {
  if (navmenu.className =="open") {
      navmenu.className = "";

  } else { 
      navmenu.className = "open";
  }
}; */