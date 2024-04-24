function displayMotivationalQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateNewQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "b2t5aaa2b0903bc42e03fo6f63f58de7";
  let context =
    "You are a motivational expert, you provide inspirational quotes to motivate people, you love to write short quotes to help people to feel better. Your mission is to generate 1-2 sentences quote in basic HTML and separate each sentence with </br>. Make sure to follow the user instructions. Sign the quote with `SheCodes AI` using <strong></strong> element. Do not use <strong></strong> element for the quote. Do not use doublequotes for each quote.";

  let prompt = `User instructions: generate inspirational quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">You feel ${instructionsInput.value}, I am generating inspirational quote for you ⏳</div>`;

  axios.get(apiUrl).then(displayMotivationalQuote);
}

let quoteButton = document.querySelector("#quote-generator-form");
quoteButton.addEventListener("submit", generateNewQuote);
