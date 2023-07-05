let daysItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours")
let minItem = document.querySelector("#min")
let secItem = document.querySelector("#sec")

let countDown = () => {
    let futureDate = new Date("1 jan 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    // console.log(myDate);

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

    let min = Math.floor(myDate / 1000 / 60) % 60;

    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;

    hoursItem.innerHTML = hours;

    minItem.innerHTML = min;

    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000);

/*
const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minElement = document.getElementById('min');
  const secElement = document.getElementById('sec');

  // Set the target date for the countdown (New Year's Day, 2024)
  const targetDate = new Date('January 1, 2024 00:00:00').getTime();

  // Update the countdown every second
  setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const remainingTime = targetDate - now;

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the countdown elements
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minElement.textContent = minutes;
    secElement.textContent = seconds;
  }, 1000);
*/