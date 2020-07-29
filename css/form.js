// Javascript for Login
    

function login() {

  let username = document.getElementById('username')
  let password = document.getElementById('password')

    if(username.value == "pretty" && password.value =="cloudz")
      {
        window.open(gallery.html)
      }
    else
    {
      alert("Please see the README.md for the correct username and password")
    }   
};