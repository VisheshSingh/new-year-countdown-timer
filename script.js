const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const container = document.getElementById('container');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerHTML = currentYear + 1;

function updateTime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.textContent = d;
  hours.textContent = h < 10 ? '0' + h : h;
  minutes.textContent = m < 10 ? '0' + m : m;
  seconds.textContent = s;
}

updateTime();

setTimeout(() => {
  loading.remove();
  container.style.display = 'flex';
}, 1000);

setInterval(updateTime, 1000);
