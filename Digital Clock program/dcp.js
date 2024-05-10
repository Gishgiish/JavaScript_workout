// DIGITAL CLOCK PROGRAM

// update clock immediately program starts
function updateClock(){

    // get the time right now
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12? "PM" : "AM" ;
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    // change text cotent of the clock 
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
// make sure the clock is moving and updating regularly
setInterval(updateClock, 1000);