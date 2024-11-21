document.addEventListener('DOMContentLoaded', () => {
    // Select the hands
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    // Function to update the clock every second
    setInterval(() => {
        const d = new Date();
        const htime = d.getHours();
        const mtime = d.getMinutes();
        const stime = d.getSeconds();
        
        // Calculate the rotations
        const hrotation = 30 * htime + mtime / 2; // 360 degrees for 12 hours, adjust for minute increment
        const mrotation = 6 * mtime; // 360 degrees for 60 minutes
        const srotation = 6 * stime; // 360 degrees for 60 seconds

        // Apply the rotations
        hourHand.style.transform = `translateX(-50%) rotate(${hrotation}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${mrotation}deg)`;
        secondHand.style.transform = `translateX(-50%) rotate(${srotation}deg)`;
    }, 1000); // Update every second
});
