function fetchApi2() {
    const api2 = 'https://jsonplaceholder.typicode.com/todos';  // Example API 2

    fetch(api2)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch from API 2');
            return response.json();
        })
        .then(data => displayApi2(data))
        .catch(error => {
            document.getElementById('api2-results').innerHTML = 'Error loading API 2 data.';
            console.log('Error:', error);
        });
}

function displayApi2(todos) {
    const apiResults = document.getElementById('api2-results');
    let html = '<ul>';
    todos.slice(0, 5).forEach(todo => {
        html += `<li>${todo.title} - ${todo.completed ? 'Completed' : 'Pending'}</li>`;
    });
    html += '</ul>';
    apiResults.innerHTML = html;
}
document.addEventListener('DOMContentLoaded', () => {
   
    fetchApi2();
   
});
