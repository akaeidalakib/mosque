export function convertTo12HourFormat(time24) {
    // Check if the input is a valid 24-hour time format
    const regex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    if (!regex.test(time24)) {
        return 'Invalid time format. Please provide a valid 24-hour time format.';
    }

    // Split the time into hours and minutes
    const [hours, minutes] = time24.split(':').map(Number);

    // Convert to 12-hour format
    let suffix = hours >= 12 ? 'PM' : 'AM';
    let hours12 = hours % 12 || 12;

    // Format the time in 12-hour format
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${suffix}`;

    return time12;
}

// Example usage
const time24 = '13:30'; // Replace this with your desired 24-hour time
const time12 = convertTo12HourFormat(time24);
console.log(time12);