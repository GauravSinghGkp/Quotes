const quotes = document.getElementById("quote");
const dropdown = document.getElementById("topics");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const btn = document.getElementById("button");

let selectedCategory = "Inspirational";

generateNewQuote();

dropdown.addEventListener("change", () => {
  selectedCategory = dropdown.value;
});

btn.addEventListener("click", generateNewQuote);

function generateNewQuote() {
  fetch(`https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`, {
    headers: {
      "X-Api-Key": "0sVRtMX15v0The4V4zzA9A==mNM0aoM0M2T54UPf",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayQuote(data[0].quote, data[0].author);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function displayQuote(quote, author) {
  quoteText.innerText = quote;
  authorName.innerText = author;
}
