// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const fahrenheit = 68; // Replace with the temperature in Fahrenheit
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);

const celsiusValue = 20; // Replace with the temperature in Celsius
const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F`);
