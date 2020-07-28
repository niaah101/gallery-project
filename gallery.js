let name = document.getElementById('name')
let password = document.getElementById('password')
let email = document.getElementById('email')
let form = document.getElementById('myform')
let button = document.getElementById('button')
let errorElement = document.getElementById('error')

//Toggle for hamburger menu

let hamburger = document.getElementsByClassName('hamburger')
let navmenu = document.getElementsByClassName('menu')

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('active')
})


// Form Functionality

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
})