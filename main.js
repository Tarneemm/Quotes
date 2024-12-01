const quotes = [
  { text: "  Some cause happiness wherever they go; others, whenever they go", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
];


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("author-name");
const newQuoteButton = document.getElementById("btn");

newQuoteButton.addEventListener("click", function() {
  const newQuote = getRandomQuote();
  quoteTextElement.textContent = `"${newQuote.text}"`;  
  quoteAuthorElement.textContent = `― ${newQuote.author}`;  
  });

