(function () {
    /* ---------- Traduzioni EN (l'italiano è il testo già presente nell'HTML) ---------- */
    var EN = {
        title: "Rooms in Bitritto | Guest house near Bari",
        desc: "Guest house in Bitritto, minutes from Bari: carefully kept rooms, Apulian breakfast and direct booking with no commission.",
        n_home: "The house", n_rooms: "Rooms", n_serv: "Services", n_near: "Around us", n_rev: "Reviews", n_book: "Book",
        h1: "A stay with the rhythm of home.",
        sub: "A guest house in Bitritto, minutes from Bari: the calmest way to be between city, countryside and sea.",
        c1: "Discover the Rooms", c2: "Check Availability",
        id_h: "Apulian hospitality, without the stage set",
        id_p1: "Here the door opens onto a real home. We welcome you in person, tell you where to eat well in Bitritto and when to leave for Bari to avoid traffic.",
        id_p2: "The rooms are simple and well kept: cotton sheets, natural light, quiet evenings. The land does the rest, with olive groves, dry-stone walls and bakeries that open at dawn.",
        f1l: "Location", f1v: "Bitritto, 10 min from Bari", f2l: "Rooms", f2v: "3 room types", f3l: "Breakfast", f3v: "Local products", f4l: "Booking", f4v: "Direct, no commission",
        r_h: "Rooms in Bitritto",
        r_p: "Choose the room that suits your trip and write to us: we reply with availability and our best rate.",
        g_soon: "Photos coming soon",
        r1_cap: "Double bed, 2 guests", r2_cap: "Double or twin, 2 guests", r3_cap: "Up to 4 guests",
        t_ac: "Air conditioning", t_bath: "Private bathroom", t_fridge: "Mini fridge", t_desk: "Desk", t_crib: "Cot on request",
        r_btn: "Ask about this Room",
        s_h: "What you find during your stay", s_lead: "A few things, done with care.",
        s1h: "A personal welcome", s1p: "Flexible check-in, tailored directions and honest advice on where to go each day.",
        s2h: "Local breakfast", s2p: "Focaccia, taralli, seasonal fruit, coffee and sweets from the local bakery.",
        s3h: "Real rest", s3p: "Quiet rooms, quality linen, air conditioning and blackout curtains for good sleep.",
        s4h: "Comforts included", s4p: "Fast Wi-Fi, parking, private bathroom, toiletries and help with luggage and transfers.",
        n_h: "A stay near Bari, in the heart of Apulia",
        n_p: "Bitritto is a quiet town with an old centre and olive-grove countryside, well connected to Bari and the coast. Approximate travel times by car.",
        d1: "Bari-Palese Airport", d2: "Bari Centrale station", d3: "Bari Vecchia and seafront", d4: "Sea (Torre a Mare)",
        map_l: "Open directions in Google Maps",
        g_h: "Local mini-guide",
        g_p: "Three places, three ways to spend the day. On site we give you up-to-date addresses and opening times.",
        gu1s: "Bitritto: eating and strolling",
        gu1a: "<strong>To do.</strong> Walk the old centre at sunset, then wander the olive groves around town. At weekends life moves to the square.",
        gu1b: "<strong>To eat.</strong> Handmade orecchiette, Bari-style focaccia fresh from the oven, local vegetables and oil. Ask us for the trattoria or bakery we prefer.",
        gu2s: "Bari Vecchia: a morning on foot",
        gu2a: "<strong>Getting there.</strong> About 25 minutes by car; park outside the ZTL (restricted zone) and walk in. Check current train or bus times: we are happy to help.",
        gu2b: "<strong>To see.</strong> Basilica of San Nicola, Strada delle Orecchiette, the Swabian Castle and the seafront. Arrive early, before the heat and the tour groups.",
        gu3s: "Polignano a Mare: half a day on the coast",
        gu3a: "<strong>Getting there.</strong> About 40 minutes by car. In summer leave early to find parking and a quiet sea.",
        gu3b: "<strong>To see.</strong> The old town above the sea, Lama Monachile and the cliff viewpoints. With more time, continue to Monopoli.",
        rv_h: "What our guests say",
        rv_p: "Words from people who have stayed here, taken from the platforms where they left their review.",
        rv1t: "«Add a real guest review here.»", rv_a: "Name, country · Platform",
        rv_l1: "Read on Booking.com", rv_l2: "Read on Airbnb", rv_l3: "Read on Google",
        ct_h: "Book directly, no commission",
        ct_p: "Send us your dates: we usually reply within a few hours.",
        inc_h: "The advantage of writing to us directly",
        inc_p: "Best rate guaranteed, flexible check-in and a taste of local products on arrival.",
        inc_btn: "Write to us on WhatsApp",
        l_name: "Name", l_email: "Email", l_tel: "Phone", l_guests: "Guests", l_in: "Check-in", l_out: "Check-out", l_room: "Room", l_msg: "Message",
        o_none: "No preference", send: "Send request",
        note: "We use your data only to reply to you.",
        hub_h: "Prefer a booking platform?",
        hub_p: "You can also book through the official channels. For the best rates, write to us directly.",
        hub_b: "Book on Booking.com", hub_a: "Book on Airbnb",
        ft_p: "Rooms in Bitritto, near Bari. Working name.", ft_c: "Contact", ft_s: "Follow us", ft_copy: "All rights reserved.", ft_top: "Back to top",
        m_val: "Enter your name and a valid email so we can reply.",
        m_dates: "The check-out date must be after check-in.",
        m_sending: "Sending…",
        m_ok: "Thank you! Your request has been sent. We will reply shortly.",
        m_err: "Something went wrong. Please write to us on WhatsApp or by email.",
        aria_menu: "Open menu", aria_wa: "Write to us on WhatsApp",
        wa_msg: "Hello, I would like information about the rooms."
    };

    var IT = {
        m_val: "Inserisci nome ed email valida per poterti rispondere.",
        m_dates: "La data di partenza deve essere successiva all'arrivo.",
        m_sending: "Invio in corso…",
        m_ok: "Grazie! La tua richiesta è stata inviata. Ti rispondiamo a breve.",
        m_err: "Qualcosa non ha funzionato. Scrivici su WhatsApp o via email.",
        aria_menu: "Apri il menu",
        aria_wa: "Scrivici su WhatsApp",
        wa_msg: "Buongiorno, vorrei informazioni sulle camere.",
        title: document.title,
        desc: document.querySelector('meta[name=description]').content
    };

    var nodes = [].slice.call(document.querySelectorAll('[data-i18n]'));
    nodes.forEach(function (n) { n.dataset.it = n.innerHTML });
    var lang = 'it';

    function t(k) { return (lang === 'en' ? EN : IT)[k] }

    function setLang(l, save) {
        lang = l;
        nodes.forEach(function (n) {
            var k = n.dataset.i18n;
            n.innerHTML = (l === 'en' && EN[k] !== undefined) ? EN[k] : n.dataset.it;
        });
        document.documentElement.lang = l;
        document.title = t('title');
        document.querySelector('meta[name=description]').content = t('desc');
        document.querySelector('.menu-btn').setAttribute('aria-label', t('aria_menu'));
        var wa = document.getElementById('wa');
        wa.setAttribute('aria-label', t('aria_wa'));
        var url = 'https://wa.me/390000000000?text=' + encodeURIComponent(t('wa_msg'));
        wa.href = url;
        document.getElementById('wa2').href = url;
        document.querySelectorAll('.lang button').forEach(function (b) {
            b.setAttribute('aria-pressed', b.dataset.lang === l);
        });
        if (save) { try { localStorage.setItem('lang', l) } catch (e) { } }
    }

    document.querySelectorAll('.lang button').forEach(function (b) {
        b.addEventListener('click', function () { setLang(b.dataset.lang, true) });
    });

    var saved = null;
    try { saved = localStorage.getItem('lang') } catch (e) { }
    setLang(saved || ((navigator.language || 'it').slice(0, 2) === 'it' ? 'it' : 'en'), false);

    /* ---------- Header e menu ---------- */
    var h = document.querySelector('header'), mb = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
    function onScroll() { h.classList.toggle('solid', window.scrollY > 40) }
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });

    mb.addEventListener('click', function () {
        var o = menu.classList.toggle('open');
        mb.setAttribute('aria-expanded', o);
    });

    menu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            menu.classList.remove('open');
            mb.setAttribute('aria-expanded', 'false');
        }
    });

    /* ---------- Comparsa allo scroll ---------- */
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
        es.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: .12 }) : null;

    document.querySelectorAll('.rv').forEach(function (el) {
        io ? io.observe(el) : el.classList.add('in');
    });

    /* ---------- Camera preselezionata ---------- */
    document.querySelectorAll('[data-room]').forEach(function (a) {
        a.addEventListener('click', function () {
            document.getElementById('camera').value = a.dataset.room;
        });
    });

    /* ---------- Form Web3Forms (AJAX) ---------- */
    var f = document.getElementById('form'), st = document.getElementById('status'), btn = document.getElementById('send');
    f.arrivo.min = new Date().toISOString().split('T')[0];
    f.arrivo.addEventListener('change', function () { f.partenza.min = f.arrivo.value });

    function say(k, err) {
        st.textContent = t(k);
        st.classList.toggle('err', !!err);
    }

    f.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!f.nome.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value)) {
            say('m_val', true);
            return;
        }
        if (f.arrivo.value && f.partenza.value && f.partenza.value <= f.arrivo.value) {
            say('m_dates', true);
            return;
        }
        var data = Object.fromEntries(new FormData(f).entries());
        if (String(data.access_key).indexOf('INSERISCI') === 0) {
            console.warn('Sostituisci access_key con quella ricevuta da Web3Forms.');
        }
        btn.disabled = true;
        say('m_sending', false);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(function (r) { return r.json() })
            .then(function (j) {
                if (j.success) {
                    say('m_ok', false);
                    f.reset();
                } else {
                    say('m_err', true);
                }
            })
            .catch(function () { say('m_err', true) })
            .finally(function () { btn.disabled = false });
    });

    document.getElementById('yr').textContent = new Date().getFullYear();
})();