// FUNCTIONS
function generatePoem(event) {
  event.preventDefault();

  // Displaying poem
  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "Women learning to code, taking flight.",
    autoStart: true,
    delay: 50,
    cursor: "|",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

// API call

// Loading message
