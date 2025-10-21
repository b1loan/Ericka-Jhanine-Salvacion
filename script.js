
document.getElementById('showQR').addEventListener('click', () => {
  document.getElementById('qrContainer').classList.toggle('qr-hidden');
});

document.getElementById('verifyBtn').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'flex';
  let hours = 36 * 60 * 60;
  const countdown = document.getElementById('countdown');
  const timer = setInterval(() => {
    const h = Math.floor(hours / 3600);
    const m = Math.floor((hours % 3600) / 60);
    const s = hours % 60;
    countdown.textContent = `${h}h ${m}m ${s}s remaining`;
    hours--;
    if (hours < 0) {
      clearInterval(timer);
      countdown.textContent = "✅ Verified";
    }
  }, 1000);
});
