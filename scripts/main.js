
document.getElementById('formSubmit').onsubmit= function validateForm() {
  var x = document.getElementById('username').value;
  if (x == '') {
    document.getElementById('message').innerHTML = 'Username must be filled out';
    return false;
  }
  var y = document.getElementById('password').value;
  if (y == '') {
    document.getElementById('message').innerHTML = 'Password must be filled out';
    return false;
  }
}