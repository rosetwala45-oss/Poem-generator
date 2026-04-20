// FUNCTIONS
function displayPoem(response) {
  // Displaying poem
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: " ",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // API call
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "0dc6tacc431o670b15e9a5cb213feec1";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert that loves to write short poems. Your missions is to generte a 4 line poem.Seperate each line with a <br />. Make sure to follow user instructions.Do not include a title to the poem. Sign the poem with 'SheCodes AI' in bold inside a <strong> tag at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");

  // Loading message
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

// When form is submitted
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
