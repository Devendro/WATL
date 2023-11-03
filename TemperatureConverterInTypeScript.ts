// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

const fahrenheit: number = 68; // Replace with the temperature in Fahrenheit
const celsius: number = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);

const celsiusValue: number = 20; // Replace with the temperature in Celsius
const fahrenheitValue: number = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F`);

export {};
