(function () {
      var h = document.querySelector('header'), mb = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
      function onScroll() { h.classList.toggle('solid', window.scrollY > 40) }
      onScroll(); addEventListener('scroll', onScroll, { passive: true });
      mb.addEventListener('click', function () { var o = menu.classList.toggle('open'); mb.setAttribute('aria-expanded', o) });
      menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.classList.remove('open'); mb.setAttribute('aria-expanded', 'false') } });

      var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }) }, { threshold: .12 }) : null;
      document.querySelectorAll('.rv').forEach(function (el) { io ? io.observe(el) : el.classList.add('in') });

      document.querySelectorAll('[data-room]').forEach(function (a) { a.addEventListener('click', function () { document.getElementById('camera').value = a.dataset.room }) });

      var f = document.getElementById('form'), st = document.getElementById('status');
      var today = new Date().toISOString().split('T')[0];
      f.arrivo.min = today;
      f.arrivo.addEventListener('change', function () { f.partenza.min = f.arrivo.value });
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!f.nome.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value)) { st.textContent = 'Inserisci nome ed email valida per poterti rispondere.'; return }
        if (f.arrivo.value && f.partenza.value && f.partenza.value <= f.arrivo.value) { st.textContent = 'La data di partenza deve essere successiva all\'arrivo.'; return }
        var body = ['Nome: ' + f.nome.value, 'Email: ' + f.email.value, 'Telefono: ' + f.tel.value, 'Arrivo: ' + f.arrivo.value, 'Partenza: ' + f.partenza.value, 'Ospiti: ' + f.ospiti.value, 'Camera: ' + (f.camera.value || 'nessuna preferenza'), '', 'Messaggio: ' + f.msg.value].join('\n');
        /* Per un invio senza app email, sostituisci con fetch() verso Formspree/Netlify Forms o un tuo endpoint. */
        location.href = 'mailto:info@example.it?subject=' + encodeURIComponent('Richiesta disponibilità') + '&body=' + encodeURIComponent(body);
        st.textContent = 'Richiesta pronta: conferma l\'invio dalla tua app email.';
      });
      document.getElementById('yr').textContent = new Date().getFullYear();
    })();