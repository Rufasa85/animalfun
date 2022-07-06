var setupDiv = document.getElementById('setup');
var punchlineDiv = document.getElementById('punchline');
var jokeButton = document.getElementById('joke-btn');

function getApi() {
  var requestUrl = 'https://manateejokesapi.herokuapp.com/manatees/random';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setupDiv.textContent = data.setup;
      punchlineDiv.textContent = data.punchline;
    });
}

getApi();

jokeButton.addEventListener('click', getApi);