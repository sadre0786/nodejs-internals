function fetchData() {
    const num = 4; // Condition check (simulation)

    return new Promise((resolve, reject) => {
        if (num === 5) {
            // Success case
            setTimeout(() => {
                resolve("Data from server");
            }, 2000);
        } else {
            // Error case
            reject("Data is rejected");
        }
    });
}

// Handling Promise result
fetchData()
    .then((result) => {
        console.log(result); // Runs on success
    })
    .catch((error) => {
        console.log(error); // Runs on failure
    });
