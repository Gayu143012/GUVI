document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 10;  // Number of items per page
    let currentPage = 1;  // Start on the first page
    let totalPages = 0;  // Total number of pages
    let data = [];  // Data will be stored here

    const contentDiv = document.getElementById("content");
    const paginationDiv = document.getElementById("pages");
    const firstButton = document.getElementById("first");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const lastButton = document.getElementById("last");

    // Fetch data from the external JSON file
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            totalPages = Math.ceil(data.length / itemsPerPage);  // Calculate total pages
            renderPage(currentPage);  // Render the first page
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            contentDiv.innerHTML = '<tr><td colspan="3">Error loading data. Please try again later.</td></tr>';
        });

    function renderPage(page) {
        contentDiv.innerHTML = '';  // Clear previous content
        paginationDiv.innerHTML = '';  // Clear previous pagination buttons

        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        const pageData = data.slice(start, end);

        // Display data for the current page
        pageData.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.email}</td>`;
            contentDiv.appendChild(row);
        });

        renderPagination();
    }

    function renderPagination() {
        // Create page buttons dynamically
        for (let i = 1; i <= totalPages; i++) {
            const span = document.createElement("span");
            span.textContent = i;
            span.className = (i === currentPage) ? "active" : "";
            span.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage);
            });
            paginationDiv.appendChild(span);
        }

        toggleButtons();
    }

    function toggleButtons() {
        firstButton.disabled = (currentPage === 1);
        prevButton.disabled = (currentPage === 1);
        nextButton.disabled = (currentPage === totalPages);
        lastButton.disabled = (currentPage === totalPages);
    }

    firstButton.addEventListener("click", () => {
        if (currentPage !== 1) {
            currentPage = 1;
            renderPage(currentPage);
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    lastButton.addEventListener("click", () => {
        if (currentPage !== totalPages) {
            currentPage = totalPages;
            renderPage(currentPage);
        }
    });
});
