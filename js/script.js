document.getElementById("search-button").addEventListener("click", function() {
    // Get the search query and filter option
    var query = document.getElementById("search-input").value;
    var filter = document.getElementById("filter").value;

    // Perform a search and display the results
    // You would replace this with your actual search logic
    var results = performSearch(query, filter);

    // Display the results in the results section
    displayResults(results);
});

function performSearch(query, filter) {
    // Replace this with your search logic
    // You might use AJAX to fetch data from a server
    // and filter based on the selected option
    // For now, let's assume we have a simple array of results
    var data = [
        { name: "Result 1", category: "option1" },
        { name: "Result 2", category: "option2" },
        { name: "Result 3", category: "option1" },
        { name: "Result 4", category: "option3" },
    ];

    if (filter === "all") {
        return data.filter(item => item.name.includes(query));
    } else {
        return data.filter(item => item.name.includes(query) && item.category === filter);
    }
}

function displayResults(results) {
    var resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "No results found.";
        return;
    }

    results.forEach(result => {
        var resultElement = document.createElement("div");
        resultElement.textContent = result.name;
        resultsContainer.appendChild(resultElement);
    });
}