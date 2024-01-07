//your JS code here. If required.
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

// Function to make asynchronous HTTP GET requests
async function makeRequests() {
    try {
        // Use Promise.all to wait for all requests to complete
        const responses = await Promise.all(urls.map(url => fetch(url)));

        // Iterate through responses and log them in a human-readable format
        responses.forEach(async (response, index) => {
            const data = await response.json();
            console.log(`Response for URL ${urls[index]}:`);
            console.log('Status:', response.status);
            console.log('Data:', data);
            console.log('\n');
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to make requests
makeRequests();

