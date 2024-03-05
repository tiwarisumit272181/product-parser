
  fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
    .then(response => response.json())
    .then(data => {
      const products = Object.values(data.products);
      products.sort((a, b) => b.popularity - a.popularity);
      const tableBody = document.getElementById('productTableBody');
      products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>${product.popularity}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
