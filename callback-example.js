// Function that accepts a callback
function fetchData(callback) {
    // Simulates async task (API / DB call)
    setTimeout(() => {
        callback("Data from server"); // Send data after delay
    }, 2000);
}

// Calling function and receiving data via callback
fetchData((result) => {
    console.log(result); // Prints received data
});
