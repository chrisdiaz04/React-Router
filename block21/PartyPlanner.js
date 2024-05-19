fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-ftb-mt-web-pt/recipes')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log data to the console or use this data in your state
    })
    .catch(error => console.error('Error:', error));
