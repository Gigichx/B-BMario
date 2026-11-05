/* Regole di prenotazione: nessuna dipendenza, nessun dato degli ospiti.
   Funziona nel browser (globale BookingRules) e in Node (require). */
(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.BookingRules = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    var ROOM_MAX = { 'Camera Ulivo': 4, 'Camera Mandorlo': 2 };
    var NO_PREFERENCE_MAX = 4;
    var EMAIL = /^\S+@\S+\.\S+$/;

    function formatLocalDate(date) {
        return date.getFullYear() + '-' +
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0');
    }

    /* Restituisce un Date solo se la stringa è AAAA-MM-GG e il giorno esiste davvero. */
    function parseDate(value) {
        var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
        if (!m) return null;
        var y = Number(m[1]), mo = Number(m[2]), d = Number(m[3]);
        var date = new Date(y, mo - 1, d);
        if (date.getFullYear() !== y || date.getMonth() !== mo - 1 || date.getDate() !== d) return null;
        return date;
    }

    function nextDay(value) {
        var date = parseDate(value);
        if (!date) return '';
        date.setDate(date.getDate() + 1);
        return formatLocalDate(date);
    }

    /* Nessuna preferenza: fino a 4 persone (è una richiesta, non una disponibilità).
       Camera sconosciuta: null. */
    function maxGuests(room) {
        if (!room) return NO_PREFERENCE_MAX;
        return Object.prototype.hasOwnProperty.call(ROOM_MAX, room) ? ROOM_MAX[room] : null;
    }

    function fail(code, field) {
        return { ok: false, code: code, field: field };
    }

    /* Ordine dei controlli: contatti, presenza/formato date, passato, ordine, camera, ospiti.
       Restituisce solo il primo errore, per un unico riepilogo. */
    function validate(v, today) {
        if (!String(v.nome || '').trim()) return fail('contact', 'nome');
        if (!EMAIL.test(String(v.email || ''))) return fail('contact', 'email');

        if (!parseDate(v.arrivo)) return fail('dates_required', 'arrivo');
        if (!parseDate(v.partenza)) return fail('dates_required', 'partenza');

        if (v.arrivo < today) return fail('past', 'arrivo');
        if (v.partenza <= v.arrivo) return fail('order', 'partenza');

        var max = maxGuests(v.camera);
        if (max === null) return fail('room', 'camera');

        var guests = String(v.ospiti || '').trim();
        if (!/^\d+$/.test(guests)) return fail('guests', 'ospiti');
        var n = Number(guests);
        if (n < 1 || n > max) return fail('guests', 'ospiti');

        return { ok: true };
    }

    return {
        formatLocalDate: formatLocalDate,
        parseDate: parseDate,
        nextDay: nextDay,
        maxGuests: maxGuests,
        validate: validate
    };
});
