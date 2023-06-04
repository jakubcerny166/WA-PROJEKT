function fetchJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        displayJokeError(data.error);
      } else {
        displayJoke(data.joke);
      }
    })
    .catch(error => {
      displayJokeError('Failed to fetch joke. Please try again later.');
    });
}

function displayJoke(joke) {
  const jokeContent = document.getElementById('jokeContent');
  jokeContent.innerHTML = `<p>${joke}</p>`;
}

function displayJokeError(errorMessage) {
  const jokeContent = document.getElementById('jokeContent');
  jokeContent.innerHTML = `<p>${errorMessage}</p>`;
}
