function fetchBooks() {
  let fetchVar = fetch('https://anapioficeandfire.com/api/books')
  .then(function (serverResponse){
    return serverResponse.json();
  })
  .then(function(dataAsJson){
    return renderBooks(dataAsJson);
  })
  return fetchVar;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});