function generateNewQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "All you need is Motivation!",
    autoStart: true,
    //cursor: "",
    //delay: 1,
  });
}

let quoteButton = document.querySelector("#quote-generator-form");
quoteButton.addEventListener("submit", generateNewQuote);
