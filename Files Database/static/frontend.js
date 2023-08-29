const options = {method: 'GET'};

fetch('http://127.0.0.1:3000/api', options)
  .then(response => response.json)
  .then(response => console.log(response));