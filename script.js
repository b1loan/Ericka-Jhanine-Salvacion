// script.js — handles modal, timer, and simple interactions
document.addEventListener('DOMContentLoaded', () => {
  // QR modal
  const qrModal = document.getElementById('qr-modal');
  const viewQrBtn = document.getElementById('view-qr');
  const closeQr = document.getElementById('close-qr');
  if(viewQrBtn && qrModal && closeQr){
    viewQrBtn.addEventListener('click', ()=> qrModal.setAttribute('aria-hidden','false'));
    closeQr.addEventListener('click', ()=> qrModal.setAttribute('aria-hidden','true'));
    qrModal.addEventListener('click', (e)=>{ if(e.target===qrModal) qrModal.setAttribute('aria-hidden','true');});
  }

  // Countdown 36 hours from page load
  const cdEl = document.getElementById('countdown');
  if(cdEl){
    const totalMs = 36*60*60*1000;
    const start = Date.now();
    function update(){
      const left = totalMs - (Date.now() - start);
      if(left<=0){
        cdEl.textContent = '00:00:00';
        return;
      }
      const h = Math.floor(left/3600000).toString().padStart(2,'0');
      const m = Math.floor((left%3600000)/60000).toString().padStart(2,'0');
      const s = Math.floor((left%60000)/1000).toString().padStart(2,'0');
      cdEl.textContent = `${h}:${m}:${s}`;
      requestAnimationFrame(()=>setTimeout(update,500));
    }
    update();
  }

  // Verify button behaviour (front-end demo)
  const verifyBtn = document.getElementById('verify-btn');
  if(verifyBtn){
    verifyBtn.addEventListener('click', ()=>{
      alert('To verify: please upload a valid ID on the "Verify ID" page. This demo does not transmit files off your device.');
      window.location.href = 'verify.html';
    });
  }

  // ID upload preview (client-side only)
  const uploadBtn = document.getElementById('upload-btn');
  const idFile = document.getElementById('id-file');
  const preview = document.getElementById('preview');
  if(uploadBtn && idFile && preview){
    uploadBtn.addEventListener('click', ()=>{
      const file = idFile.files[0];
      if(!file){ alert('Please choose a file first.'); return; }
      const reader = new FileReader();
      reader.onload = (e)=> {
        preview.innerHTML = `<p>Preview:</p><img src="${e.target.result}" style="max-width:320px;border-radius:8px;border:1px solid rgba(255,255,255,0.06)">`;
      };
      reader.readAsDataURL(file);
    });
  }
});
