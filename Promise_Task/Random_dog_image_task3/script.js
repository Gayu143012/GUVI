function fetchApi3() {
    const api3 = 'https://dog.ceo/api/breeds/image/random';  // Example API 3

    fetch(api3)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch from API 3');
            return response.json();
        })
        .then(data => displayApi3(data.message))
        .catch(error => {
            document.getElementById('api3-results').innerHTML = 'Error loading API 3 data.';
            console.log('Error:', error);
        });
}

function displayApi3(imageUrl) {
    const apiResults = document.getElementById('api3-results');
    let html = `<img src="${imageUrl}" alt="Random Dog" class="dog-image" />`;
    apiResults.innerHTML = html;
}

// Call each function to fetch data from all APIs
document.addEventListener('DOMContentLoaded', () => {
    fetchApi3();
});