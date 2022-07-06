
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

var randKitten = "http://placekitten.com/g/200/300"

var kittenEl = document.querySelector("#random-kitten")
var kittenImg = document.querySelector("#kitten")

kittenImg.setAttribute("src", randKitten)

// TODO: need to create a function to randomize the kitten image

