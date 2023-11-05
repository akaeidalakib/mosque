import axios from "axios";

async function getLatLong(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${address}`;

    try {
        const response = await axios.get(url);
        const data = await response.json();

        if (data.length > 0) {
            const latitude = data[0].lat;
            const longitude = data[0].lon;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
            console.log('No results found for the given address');
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}

// Example usage:
const address = 'Your Address Here'; // Replace with the desired address
const latlong = getLatLong(address);
export default latlong;