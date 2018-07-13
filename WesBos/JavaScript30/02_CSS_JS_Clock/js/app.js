// items

const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    // console.log('Time');
    const now = new Date()
    const sec = now.getSeconds();
    // console.log('sec', sec);
    const secDeg = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`
    
    const min = now.getMinutes();
    // console.log('min', min);
    const minDeg = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg`
    
    const hour = now.getHours();
    // console.log('hour', hour);
    const hourDeg = (30 * 10) + ((min / 60) * 30)  + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate, 1000)