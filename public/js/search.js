document.addEventListener("DOMContentLoaded", function () {
  // Fetch the index.json file containing the search index
  fetch('/index.json')
    .then(response => response.json())
    .then(data => {
      console.log('Data from index.json:', data); // Log the retrieved data

      let index = lunr(function () {
        this.ref('uri');
        this.field('title');
        this.field('content');
        this.field('tags'); // Add more fields as needed

        data.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      // Function to perform search and display results
      function performSearch(term) {
        let results = index.search(term);
        let searchResultsContainer = document.querySelector('.searchResults');
        searchResultsContainer.innerHTML = ''; // Clear previous results

        if (results.length === 0) {
          searchResultsContainer.innerHTML = '<li>No results found</li>';
        } else {
          results.forEach(result => {
            let doc = data.find(entry => entry.uri === result.ref); // Get the matching document
            if (doc) {
              let listItem = document.createElement('li');
              let link = document.createElement('a');
              link.href = doc.uri;
              link.textContent = doc.title;
              listItem.appendChild(link);
              searchResultsContainer.appendChild(listItem);
            }
          });
        }
      }

      // Handle form submission for search
      document.querySelector('.search').addEventListener('submit', function (event) {
        event.preventDefault();
        let searchTerm = document.querySelector('.searchTerm').value.trim();
        if (searchTerm !== '') {
          performSearch(searchTerm);
        }
      });
    })
    
    .catch(error => {
      console.error('Error fetching search index:', error);
    });

     // Event listener to dismiss search results on click outside
  document.body.addEventListener('click', function (event) {
    const searchContainer = document.querySelector('.search');
    const isClickInsideSearch = searchContainer.contains(event.target);
    const searchResults = document.querySelector('.searchResults');

    if (!isClickInsideSearch) {
      searchResults.innerHTML = ''; // Clear search results when clicking outside
    }
  });
});
