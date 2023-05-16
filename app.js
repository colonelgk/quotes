const quoteData = 'https://api.quotable.io/quotes/random';

const quotes = localStorage.getItem("quotes") ? JSON.parse(localStorage.getItem("quotes")): []
const tempQuote = []

fetch(quoteData)
  .then(response => response.json())
  .then(data => {

    const firstObject = data[0];
   
    const { content, author ,tags ,authorSlug} = firstObject;
    tempQuote.push(content)
    // Display the quote in the HTML document
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `
    <p>Quote :${content}</p>
    <p>Author :${author}</p>
    <p>Type: ${tags}</p>
    <p>Author tags :${authorSlug}</p>`;
  })
  .catch(error => {
    console.error(error);
  });

  document.querySelector('#push').addEventListener("click",  () =>{
    console.log(quotes)
    quotes.push(tempQuote[0])
    localStorage.setItem("quotes", JSON.stringify(quotes))
    location.reload()
})

  for(let i = 0; i < quotes.length; i++){   // task number the value, task number and the delete button. diplayed. elements with class delete
      document.querySelector('#savedquotes').innerHTML += `  
      <div class="sq">
              <br>
              ${quotes[i]}
              <br>
      </div>
  `
  }


