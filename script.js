function counter() {
  var timeRemaining = new Date(2024, 0, 1).valueOf() - new Date().valueOf();
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  var minutes = Math.floor(timeRemaining / (1000 * 60));
  var seconds = Math.floor(timeRemaining / 1000);

  var getnums = document.getElementsByClassName("num");
  for (var i = 0; i < getnums.length; i++) {
    switch (getnums[i].id) {
      case "days":
        getnums[i].innerText = days;
        break;

      case "hours":
        getnums[i].innerText = hours;
        break;

      case "minutes":
        getnums[i].innerText = minutes;
        break;

      case "seconds":
        getnums[i].innerText = seconds;
        break;

      default:
        console.log("unable to get time.");
        break;
    }
  }

  var getnums2 = document.querySelectorAll(".container-2 .num");
  for (var i = 0; i < getnums2.length; i++) {
    switch (getnums2[i].id) {
      case "days":
        getnums2[i].innerText = days;
        break;

      case "hours":
        getnums2[i].innerText = hours % 24;
        break;

      case "minutes":
        getnums2[i].innerText = minutes % 60;
        break;

      case "seconds":
        getnums2[i].innerText = seconds % 60;
        break;

      default:
        console.log("unable to get time.");
        break;
    }
  }
}

setInterval(counter);
