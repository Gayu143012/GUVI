
document.addEventListener('DOMContentLoaded', () => {
    // API 1: Random Joke
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            document.getElementById('api1-results').innerHTML = `
                <p><strong>Setup:</strong> ${data.setup}</p>
                <p><strong>Punchline:</strong> ${data.punchline}</p>
            `;
        })
        .catch(error => {
            document.getElementById('api1-results').innerHTML = 'Failed to load joke';
            console.error('There was a problem with the fetch operation:', error);
        });

});