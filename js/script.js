var url = 'https://api.icndb.com/jokes/random';

//Get joke by clicking the button
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke || "Oops we cannot connect, try again later...";
    });
    xhr.send();
  }

  getJoke();