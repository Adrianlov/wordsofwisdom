const category = 'happiness';

let btn = document.getElementById('press')

btn.addEventListener('click', () =>{
   getRandomQuote()
})


const apiKey = 'kH3sMhManeqq9ykYzwKP3w==UAhBV57R1Hp7O1MS';

  // Function to fetch a random quote from the API-Ninjas API
  function getRandomQuote() {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-API-Key': apiKey,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Get a random quote
        const randomQuote = data[Math.floor(Math.random() * data.length)];

        // Update the content of the quotes container
        const quotesContainer = document.getElementById('quotes-container');
        quotesContainer.innerHTML = `"${randomQuote.quote}" - ${randomQuote.author}`;
      })
      .catch(error => {
        console.error('Fetch error:', error.message);
      });
  }



