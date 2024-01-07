const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

// Function to make asynchronous HTTP GET requests
function makeRequests() {
    // Array to store promises for each request
    const requests = [];

    // Iterate through URLs and create a promise for each request
    for (const url of urls) {
        const requestPromise = fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Log the response in a human-readable format
                console.log(`Response for URL ${url}:`);
                console.log('Data:', data);
                console.log('\n');
            })
            .catch(error => {
                // Log any errors that occurred during the request
                console.error(`Error for URL ${url}:`, error.message);
            });

        requests.push(requestPromise);
    }

    // Use Promise.all to wait for all requests to complete
    Promise.all(requests)
        .then(() => {
            console.log('All requests completed successfully.');
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

// Call the function to make requests
makeRequests();
