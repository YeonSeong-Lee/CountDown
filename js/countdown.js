// make countdown timer
document.addEventListener('DOMContentLoaded', function () {
  const endDate = new Date("2024-12-06").getTime();
  var downloadTimer = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = endDate - currentDate;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((timeLeft % (1000 * 60)) / 100);
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("comment").innerHTML = "Finished";
    } else {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      document.getElementById("milliseconds").innerHTML = milliseconds;
    }
  }, 1000);
}, false);