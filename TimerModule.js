// Using setTimeout to run code after a delay
const delayInMilliseconds = 3000; // 3 seconds

const timeout = setTimeout(() => {
  console.log("This code ran after a delay of 3 seconds.");
}, delayInMilliseconds);

// Using setInterval to run code at regular intervals
const intervalInMilliseconds = 2000; // 2 seconds

const interval = setInterval(() => {
  console.log("This code runs every 2 seconds.");
}, intervalInMilliseconds);

// To stop the interval after a certain time, you can use setTimeout
const stopTimeInMilliseconds = 10000; // Stop after 10 seconds

setTimeout(() => {
  clearInterval(interval); // This stops the interval
  console.log("Interval stopped after 10 seconds.");
}, stopTimeInMilliseconds);