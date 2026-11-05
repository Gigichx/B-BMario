const test = require('node:test');
const assert = require('node:assert/strict');
const B = require('../assets/JS/booking.js');

const TODAY = '2026-11-05';
const base = {
    nome: 'Anna',
    email: 'anna@example.com',
    arrivo: '2026-12-01',
    partenza: '2026-12-03',
    camera: 'Camera Ulivo',
    ospiti: '2'
};
const check = (over) => B.validate(Object.assign({}, base, over), TODAY);

test('richiesta valida', () => {
    assert.deepEqual(check({}), { ok: true });
    assert.deepEqual(check({ arrivo: TODAY, partenza: '2026-11-06' }), { ok: true });
});

test('nome/email controllati prima delle date', () => {
    assert.deepEqual(check({ nome: '  ', arrivo: '' }), { ok: false, code: 'contact', field: 'nome' });
    assert.deepEqual(check({ email: 'anna@', arrivo: '' }), { ok: false, code: 'contact', field: 'email' });
});

test('date mancanti: richiesta date, non errore "passato"', () => {
    assert.deepEqual(check({ arrivo: '', partenza: '' }), { ok: false, code: 'dates_required', field: 'arrivo' });
    assert.deepEqual(check({ partenza: '' }), { ok: false, code: 'dates_required', field: 'partenza' });
});

test('date impossibili o malformate', () => {
    assert.equal(check({ arrivo: '2026-02-30' }).code, 'dates_required');
    assert.equal(check({ arrivo: '2026-13-01' }).code, 'dates_required');
    assert.equal(check({ arrivo: '01/12/2026' }).code, 'dates_required');
    assert.equal(check({ partenza: '2026-12-32' }).code, 'dates_required');
});

test('arrivo nel passato e ordine del soggiorno', () => {
    assert.equal(check({ arrivo: '2026-11-04', partenza: '2026-11-06' }).code, 'past');
    assert.equal(check({ partenza: '2026-12-01' }).code, 'order');
    assert.equal(check({ partenza: '2026-11-20' }).code, 'order');
});

test('capienze: Mandorlo max 2, Ulivo max 4, nessuna preferenza max 4', () => {
    assert.equal(check({ camera: 'Camera Mandorlo', ospiti: '2' }).ok, true);
    assert.equal(check({ camera: 'Camera Mandorlo', ospiti: '3' }).code, 'guests');
    assert.equal(check({ camera: 'Camera Mandorlo', ospiti: '4' }).code, 'guests');
    assert.equal(check({ camera: 'Camera Ulivo', ospiti: '4' }).ok, true);
    assert.equal(check({ camera: '', ospiti: '4' }).ok, true);
    assert.equal(check({ camera: '', ospiti: '5' }).code, 'guests');
});

test('valori alterati: ospiti vuoti, zero, testo, decimali', () => {
    for (const ospiti of ['', '0', '-1', 'abc', '2.5', '9']) {
        assert.equal(check({ ospiti }).code, 'guests', 'ospiti=' + ospiti);
    }
});

test('camera sconosciuta', () => {
    assert.deepEqual(check({ camera: 'Camera Ciliegio' }), { ok: false, code: 'room', field: 'camera' });
    assert.equal(check({ camera: 'toString' }).code, 'room');
});

test('giorno successivo: mese, anno, bisestile', () => {
    assert.equal(B.nextDay('2026-01-31'), '2026-02-01');
    assert.equal(B.nextDay('2026-02-28'), '2026-03-01');
    assert.equal(B.nextDay('2028-02-28'), '2028-02-29');
    assert.equal(B.nextDay('2028-02-29'), '2028-03-01');
    assert.equal(B.nextDay('2026-12-31'), '2027-01-01');
    assert.equal(B.nextDay(''), '');
    assert.equal(B.nextDay('2026-02-30'), '');
});
