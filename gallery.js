//Toggle for hamburger menu

function myFunction() {
  
  let navmenu = document.getElementById('menuLinks');

  if (navmenu.style.display === "block") {
    navmenu.style.display = "none";
  } else {
    navmenu.style.display = "block";
  }
}


//Old toggle code used
/*let hamburger = document.getElementById('hamburger')
let navmenu = document.getElementById('menu-links')

hamburger.onclick = function() {
  if (navmenu.className =="open") {
      navmenu.className = "";

  } else { 
      navmenu.className = "open";
  }
}; */


/* // Form Functionality

/* let name = document.getElementById('name')
let password = document.getElementById('password')
let email = document.getElementById('email')
let form = document.getElementById('myform')
let button = document.getElementById('button')
let errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value  === '' || name.value == null) {
    messages.push('Username is required')
  }

  if (email.value  === '' || email.value == null) {
    messages.push('Username is required')
  }

  if (password.value.length <= 8 || password.value.length >= 15) {
    messages.push('Valid password is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
}) */