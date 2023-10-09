const axios = require('axios');

// Define the API endpoint you want to call
const apiUrl = 'https://example.com/api'; // Replace with your API URL

// Function to make the API call
async function callApi() {
  try {
    const response = await axios.get(apiUrl);
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the API every second
const interval = 1000; // 1 second
setInterval(callApi, interval);

// Optionally, you can stop the interval after a certain number of iterations or based on a condition
// For example, stop after 10 iterations
const maxIterations = 10;
let iterations = 0;

function stopInterval() {
  iterations++;
  if (iterations >= maxIterations) {
    clearInterval(apiInterval);
    console.log('API calls stopped after', maxIterations, 'iterations.');
  }
}

const apiInterval = setInterval(callApi, interval);