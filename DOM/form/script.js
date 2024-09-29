document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('Address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const foodChoices = [];
    document.querySelectorAll('input[name="food"]:checked').forEach(food => {
        foodChoices.push(food.value);
    });

    // Validate at least two food choices are selected
    if (foodChoices.length < 2) {
        alert('Please select at least 2 food choices.');
        return;
    }

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const comments = document.getElementById('comments').value;

    // Validate Pincode
    if (!/^\d{6}$/.test(pincode)) {
        alert('Please enter a valid 6-digit pincode.');
        return;
    }

    // Append form data to the table
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = document.createElement('tr');

    // Create table cells with the input values
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${email}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${foodChoices.join(', ')}</td>
      <td>${state}</td>
      <td>${country}</td>
      <td>${comments}</td>
    `;

    // Append the new row to the table body
    table.appendChild(newRow);

    // Clear form fields after submission
    document.getElementById('survey-form').reset();
});
