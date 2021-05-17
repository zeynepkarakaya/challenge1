var blackscreen = document.getElementById('programname');

blackscreen.onmousemove = setTimeout(function(){
document.getElementById('message').classList.add('white');
document.getElementById('footer').classList.add('white');
}, 1000);
