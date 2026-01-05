// Function returning a Promise
function fetchData() {
    return new Promise((resolve) => {
        // Simulates async work
        setTimeout(() => {
            resolve("Fetch data from server"); // Promise resolved
        }, 2000);
    });
}

// Async function using await
async function getData() {
    console.log("Data fetching..."); // Runs immediately

    // Pauses this function until Promise resolves
    const data = await fetchData();

    console.log(data); // Prints resolved data
    console.log("Data fetched"); // Runs after await
}

// Start execution
getData();
