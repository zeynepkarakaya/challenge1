
document.getElementById('formSubmit').onsubmit= function() {
  var usernameInput = document.getElementById('username').value;
  if (usernameInput == '') {
    document.getElementById('message').innerHTML = 'Username must be filled out';
    return false;
  }
  var passwordInput = document.getElementById('password').value;
  if (passwordInput == '') {
    document.getElementById('message').innerHTML = 'Password must be filled out';
    return false;
  }
}