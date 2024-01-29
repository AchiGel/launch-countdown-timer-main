const section = document.querySelector("section");
const days = document.querySelector("#days-box");
const hours = document.querySelector("#hours-box");
const minutes = document.querySelector("#minutes-box");
const seconds = document.querySelector("#seconds-box");

const countDownDate = new Date("Jan 27, 2024 00:00:00").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  let daysTill = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursTill = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  let minutesTill = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  let secondsTill = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  days.textContent = daysTill;
  hours.textContent = hoursTill;
  minutes.textContent = minutesTill;
  seconds.textContent = secondsTill;

  if (distance <= 0) {
    clearInterval(x);
    section.innerHTML = "EXPIRED";
  }
}, 1000);
