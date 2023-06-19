AOS.init();

const cronometerButton = document.querySelector(".cronometer__button");

const daysInMs = 1000 * 60 * 60 * 24;
const hoursInMs = 1000 * 60 * 60;
const minutesInMs = 1000 * 60;
const secondsInMs = 1000;

const formSubmit = document.getElementsByClassName(
  "hero__description__form"
)[0];

var cronometro = document.getElementById("cronometro");

if (document.cookie) {
  let dateCookie = document.cookie.split("=")[1];
  let dayCookie = dateCookie.split(" ")[0];
  let monthCookie = dateCookie.split(" ")[1];
  let yearCookie = dateCookie.split(" ")[2];

  const eventDate = new Date(monthCookie + " " + dayCookie + " " + yearCookie);
}

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault;
  const day = document.getElementById("day").value;
  const month = document.getElementById("months").value;

  const year = document.getElementById("year").value;

  document.cookie =
    "day=" +
    month +
    " " +
    day +
    " " +
    year +
    "; expires= " +
    year +
    ", " +
    month +
    ", " +
    day +
    ";";
  console.log(document.cookie);

  console.log(day, month, year);
});

if (document.cookie) {
  const countEvent = setInterval(function () {
    const now = new Date();
    const timeStampActual = now.getTime();
    const timeStampEvent = new Date(document.cookie.split("=")[1]);
    const theEvent = timeStampEvent.getTime();
    const untilEventDistance = theEvent - timeStampActual;

    const daysUntilEvent = Math.floor(untilEventDistance / daysInMs);
    const hoursUntilEvent = Math.floor(
      (untilEventDistance % daysInMs) / hoursInMs
    );
    const minutesUntilEvent = Math.floor(
      (untilEventDistance % hoursInMs) / minutesInMs
    );
    const secondsUntilEvent = Math.floor(
      (untilEventDistance % minutesInMs) / secondsInMs
    );

    cronometro.innerText = `${daysUntilEvent} dias, ${hoursUntilEvent} horas,  ${minutesUntilEvent} minutos e ${secondsUntilEvent} segundos`;
    if (untilEventDistance < 0) {
      cronometro.innerText = "já aconteceu!";
    }
  }, 1000);
}

function startCronometer() {
  const valueCount = 0;
  const now = new Date();
  const startCronometer = now.getTime();
  console.log(startCronometer);
  const cronometer = document.getElementsByClassName("cronometer__counter");
  let counting = startCronometer;

  const cronometring = setInterval(function () {
    start = new Date();
    counting = start.getTime();
    let trul = counting - startCronometer;
    const hoursCount = Math.floor((trul % daysInMs) / hoursInMs);
    const minutesCount = Math.floor((trul % hoursInMs) / minutesInMs);
    const secondsCount = Math.floor((trul % minutesInMs) / secondsInMs);
    const dcm = Math.ceil((trul % secondsInMs) / 100);
    const cm = Math.ceil((trul % secondsInMs) / 10);
    const mm = Math.ceil(trul % secondsInMs);
    cronometer[0].innerText = `${hoursCount}h:${minutesCount}m:${secondsCount}s:${
      (dcm, cm, mm)
    }ms`;
    counting++;
  }, 1);
}

function timer() {}
cronometerButton.addEventListener("click", function () {
  const valueCount = 0;
  const now = new Date();
  const startCronometer = now.getTime();
  console.log(startCronometer);
  const cronometer = document.getElementsByClassName("cronometer__counter");
  let counting = startCronometer;

  const cronometring = setInterval(function () {
    start = new Date();
    counting = start.getTime();
    let trul = counting - startCronometer;
    const hoursCount = Math.floor((trul % daysInMs) / hoursInMs);
    const minutesCount = Math.floor((trul % hoursInMs) / minutesInMs);
    const secondsCount = Math.floor((trul % minutesInMs) / secondsInMs);
    const dcm = Math.ceil((trul % secondsInMs) / 100);
    const cm = Math.ceil((trul % secondsInMs) / 10);
    const mm = Math.ceil(trul % secondsInMs);
    cronometer[0].innerText = `${hoursCount}h:${minutesCount}m:${secondsCount}s:${
      (dcm, cm, mm)
    }ms`;
    counting++;
  }, 1);
});
