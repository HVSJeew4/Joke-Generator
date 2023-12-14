const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const gifContainer = document.getElementById('gif-container');

const apiKey = "S/1ClRcNBzX3vEBgUBfw/w==IBKMSunUKsapPqbe ";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
}; 

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Ready to Laugh...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);

