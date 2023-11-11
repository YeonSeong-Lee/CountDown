// make countdown timer
document.addEventListener('DOMContentLoaded', function () {
  const startDate = new Date("2023-03-16").getTime();
  const endDate = new Date("2024-12-06").getTime();
  var downloadTimer = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = endDate - currentDate;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("comment").innerHTML = "Finished";
    } else {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }
    const progress = Math.floor((currentDate - startDate) / (endDate - startDate) * 100);
    document.getElementById("progress").value = progress;
    document.getElementById("progress").innerHTML = progress + "%";
  }, 1000);
}, false);