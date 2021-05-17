var arrivalToMars = new Date('Dec 15, 2021 15:37:25').getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = arrivalToMars - now;
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30))/ (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = months + 'm ' + days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = 'ARRIVED TO MARS';
  }
}, 1000);

var fuel = document.getElementById('test');

document.getElementById('increase').onclick = function increaseValue() {
  var speed = parseInt(document.getElementById('number').value);
  speed += 10;
  document.getElementById('number').value = speed;
  fuel.innerHTML = Number(fuel.innerHTML) - 10;
  arrivalToMars = arrivalToMars - 2198289;
};

document.getElementById('decrease').onclick = function decreaseValue() {
  var speed = parseInt(document.getElementById('number').value);
  speed -= 10;
  document.getElementById('number').value = speed;
  fuel.innerHTML = Number(fuel.innerHTML) - 2;
  arrivalToMars = arrivalToMars + 2198289;
};


var quotes = ['Sky is not the limit!' , 'Don\'t forget to wave back to Earth' , 'You will be remembered!' , 'Did you know that you are brave?' , 'Don\'t forget to bring some stone with you as a souvenir!' , 'Say Hi to Elon Musk!' , 'Did you make your wish?'];
document.getElementById('addquote').onclick = function(){
  document.getElementById('message').innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById('addquote').innerHTML = '(0)' + ' New Messages';
  document.getElementById('addquote').onclick = null;
  console.log (quotes);
};






