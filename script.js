const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "I can and I will. Watch me. – Carrie Green",
    "The harder you work for something, the greater you'll feel when you achieve it. – Anonymous",
    "Push yourself, because no one else is going to do it for you. – Anonymous"
  ];
  
  const quoteDiv = document.getElementById('quote');
  const nextButton = document.getElementById('nextQuote');
  
  function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDiv.classList.remove('show');
    setTimeout(() => {
      quoteDiv.textContent = quotes[randomIndex];
      quoteDiv.classList.add('show');
    }, 200);
  }
  
  // Initial quote on page load
  window.addEventListener('DOMContentLoaded', showQuote);
  
  // Show new quote on button click
  nextButton.addEventListener('click', showQuote);
  