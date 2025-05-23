// script.js

// DOM elements
const temperatureInput = document.getElementById('temperatureInput');
const conversionTypeInputs = document.querySelectorAll('input[name="conversionType"]');
const resultDiv = document.getElementById('result');

// Function to convert temperature
function convertTemperature() {
  const inputValue = parseFloat(temperatureInput.value);
  const selectedConversion = document.querySelector('input[name="conversionType"]:checked').value;

  // Basic input validation
  if (isNaN(inputValue)) {
    resultDiv.textContent = 'Please enter a valid number.';
    return;
  }

  let result;

  if (selectedConversion === 'CtoF') {
    result = (inputValue * 9 / 5) + 32;
    resultDiv.textContent = `${inputValue} °C = ${result.toFixed(2)} °F`;
  } else {
    result = (inputValue - 32) * 5 / 9;
    resultDiv.textContent = `${inputValue} °F = ${result.toFixed(2)} °C`;
  }
}

// Event listeners
temperatureInput.addEventListener('input', convertTemperature);
conversionTypeInputs.forEach(input => input.addEventListener('change', convertTemperature));
