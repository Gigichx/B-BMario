# Antiqua Domus: istruzioni per Claude

Sito statico di una struttura con due camere a Bitritto (Bari). Repository: `Gigichx/B-BMario`.
Dominio definitivo: `https://antiquadomus.eu/`. Pubblicazione: Cloudflare Workers Builds (progetto `antiqua-domus`), da `main`.

Questo file è servito pubblicamente insieme al sito: non inserire qui dati riservati, credenziali o dettagli commerciali interni.

## Come lavorare con me

- Rispondi in italiano, in modo breve e concreto.
- Spiegami passo passo cosa modificare: file, punto da cercare (un frammento di codice), righe da togliere e righe nuove. Non riscrivere interi file già esistenti e non darmi patch. I file nuovi vanno bene.
- Prima di consigliare modifiche leggi il codice aggiornato di `main`. Se non riesci ad aprire una pagina o un file, dichiaralo e dimmi cosa incollare.
- Dichiara sempre cosa hai verificato (test, browser, larghezze) e cosa no. Non scrivere «funziona» senza averlo provato.
- Non inventare dati: foto, recensioni, certificazioni, tariffe, tasse, condizioni, metrature, date di apertura.

## Stato (12 novembre 2026)

- `index.html` è la pagina temporanea «Work in progress»; è la homepage online.
- `sito-completo.html` è il sito completo, conservato e funzionante, non ancora homepage.
- `wip.html` è una copia identica di `index.html`: se modifichi una, aggiorna anche l'altra oppure eliminala.
- Le anteprime Cloudflare dei rami falliscono con «missing a `previews` block» (`wrangler preview`): nel repository non c'è configurazione Wrangler. Da risolvere al lancio. Non aggiungere `wrangler.jsonc` senza prima controllare il comando di deploy di produzione nel pannello Cloudflare.

## Struttura

```
index.html            homepage temporanea (HTML + CSS inline, nessun JS)
sito-completo.html    sito completo
privacy.html          informativa (BOZZA, vedi sotto)
demo-calendario.html  demo: non è disponibilità reale, non collegarla come motore di prenotazione
assets/CSS/Style.css  stili del sito completo
assets/JS/script.js   traduzioni IT/EN, menu, modulo, WhatsApp, cookie, hero
assets/JS/booking.js  regole di prenotazione (date, capienze), senza dipendenze
assets/JS/motion.js   Lenis + GSAP (solo se disponibili e senza riduzione movimento)
assets/icons/         icone Phosphor Regular (MIT) + LICENSE
assets/vendor/        gsap 3.15.1 (+ScrollTrigger) e lenis 1.3.27, in locale
tests/booking.test.cjs
```

Non rinominare cartelle o file cambiando solo le maiuscole (`CSS`, `JS`, `Style.css`): l'hosting distingue maiuscole e minuscole.

## Regole tecniche

- Solo HTML, CSS e JavaScript statici. Nessuna build, nessun framework, nessun CDN a runtime: le librerie stanno in `assets/vendor/` con versione fissata.
- React Bits non è utilizzabile direttamente (è React). Se serve un effetto, si rifà in CSS o con GSAP.
- Le icone sono SVG ufficiali Phosphor Regular, salvate in locale e usate via CSS `mask`. Sono decorative: non devono essere lette dagli screen reader. Le etichette di testo restano.
- Mantieni il logo WhatsApp riconoscibile.
- Metadati: `canonical`, `og:url` e `url` del JSON-LD devono essere `https://antiquadomus.eu/`. `og:image` manca finché non ci sono le foto definitive.

## Grafica

- Palette: oliva scuro `#283024`, oliva `#4F5B43`, pietra `#F7F4ED`, sabbia `#DFD0B6`, terracotta `#A3563C` (scurita da `#B86649` per il contrasto). Non introdurre colori nuovi, salvo luce calda dell'illustrazione.
- Titoli serif (Georgia), testi sans (Inter / system). Nessun nuovo font.
- Stile minimal e caldo: linee sottili, angoli quasi vivi (2 px), molto spazio, terracotta solo per azioni e prezzi.
- Contrasto adeguato, focus visibile (sulle zone scure usare sabbia), HTML semantico.

## Movimento

- Rispetta sempre `prefers-reduced-motion`: versione statica completa.
- Niente effetti che inseguono il cursore, niente lampeggi, niente animazioni che spostano il layout (solo opacità e trasformazioni).
- `.rv` (comparsa allo scroll): gli elementi si nascondono solo con opacità, mai con `visibility`, per restare raggiungibili da tastiera.
- `motion.js` aggiunge la classe `gsap-motion` su `<html>` solo se attivo. `script.js` usa il vecchio osservatore `.rv` solo senza quella classe. Non farli operare sugli stessi elementi.
- Le ancore Lenis usano `anchors: true`: rispettano `scroll-padding-top: 72px` del CSS. Non aggiungere un offset manuale.

## Traduzioni

- L'italiano è nell'HTML, l'inglese nel dizionario `EN` di `script.js`, collegati da `data-i18n`.
- Ogni testo con `data-i18n` va aggiornato in entrambi i posti. Il contenuto è inserito con `innerHTML`: può contenere tag (i prezzi usano `<span>`, `<b>`, `<small>`).
- I messaggi del modulo (`m_*`) e WhatsApp (`wa_*`) stanno nei dizionari `IT` ed `EN`.

## Modulo e contatti

- Modulo: Web3Forms, invio AJAX. La chiave nel client è prevista dal servizio, non è una password. Honeypot mantenuto. Il frontend non garantisce protezione dallo spam né convalida lato server.
- Non è stato eseguito un invio reale: recapito, quota e protezioni del fornitore sono da verificare prima del lancio. Non fare invii di prova sul sito pubblico.
- Campi: `nome`, `email`, `arrivo`, `partenza`, `camera` (id `camera`), `ospiti` (solo `name`). I valori delle camere sono `Camera Ulivo` e `Camera Mandorlo`: devono coincidere con `booking.js`.
- Ordine dei controlli: nome ed email, presenza/formato date, arrivo non nel passato, partenza dopo l'arrivo, camera, ospiti.
- Passando da Ulivo con più di 2 ospiti a Mandorlo il campo ospiti si svuota e richiede una nuova scelta, senza ridurre il numero in silenzio.
- WhatsApp: `https://wa.me/393898873499`, con camera, date e ospiti correnti. Nome, email, telefono e testo libero non entrano mai nell'URL.
- Email: `marioantico@gmail.com`. Indirizzo: Piazza Umberto 55, Bitritto.

## Contenuti e tariffe

- Camere: Ulivo (fino a 4 ospiti, letto matrimoniale e divano letto), Mandorlo (2 ospiti, letto alla francese).
- Tariffe dirette per camera e notte: Ulivo 60 / 70 / 80 / 90 € per 1 / 2 / 3 / 4 ospiti; Mandorlo 50 / 55 € per 1 / 2. Colazione self-service inclusa.
- Non dichiarare totali con tasse o supplementi non confermati. Non promettere disponibilità: la conferma avviene dopo l'accordo.
- Da confermare con il cliente prima del lancio: metrature (35 e 20 mq), dotazioni, tasse, condizioni di cancellazione, garage e transfer, CIN.
- Nessuna recensione sintetica, nessuna foto inventata: i segnaposto restano onesti.
- Nella pagina temporanea: nessuna data di apertura né conto alla rovescia.

## Privacy

- `privacy.html` è una bozza: i campi evidenziati con `<mark>` (data, titolare, sede, conservazione, verifica Web3Forms) vanno completati dal titolare e rivisti da un professionista.
- La mappa è Google Maps: non promettere assenza di tracciamento per i servizi esterni.
- Il sito usa `localStorage` solo per `lang` (lingua) e `ck` (avviso letto).
- Le correzioni di coerenza non rendono il sito legalmente a norma.

## Verifiche

```
node --test tests/booking.test.cjs      # 9 test sulle regole
node --check assets/JS/script.js        # sintassi (idem per booking.js e motion.js)
python3 -m http.server 8000             # anteprima locale
```

- Larghezze da controllare: 360, 390, 768, 1440 px. Provare tastiera (Tab, Escape nel menu, focus sull'errore) e riduzione del movimento.
- I test coprono le regole, non il DOM né il recapito email. Playwright (Python) è utile per verificare il browser.
- Dopo una modifica al modulo: date vuote con nome ed email compilati, Ulivo 4 ospiti poi Mandorlo, cambio lingua con un errore a schermo, URL WhatsApp.

## Flusso Git

- Un ramo per ogni modifica, sempre da `main` aggiornato. Una pull request per ramo.
- Aggiungi i file uno per uno con `git add <file>`. Non usare `git add .` e controlla `git status` prima del commit.
- Non committare mai: documenti preparatori, schede cliente, dati personali, credenziali, codici di accesso, documenti di identità, feed privati dei calendari, `.DS_Store`. Un controllo automatico ha già bloccato un push per dati del cliente.
- Il merge su `main` pubblica automaticamente in produzione: unisci solo dopo aver provato in locale.

## Scambio pagina temporanea / sito completo

Stato attuale: `index.html` = temporanea, `sito-completo.html` = completo.

Per tornare al sito completo come homepage (da un ramo nuovo):

```
git mv index.html wip.html
git mv sito-completo.html index.html
```

Verifica poi canonical, `og:url` e JSON-LD (`https://antiquadomus.eu/`), contatti, privacy e modulo. Il link «Torna al sito» di `privacy.html` punta a `index.html`.

## Da fare prima del lancio

1. Risolvere le anteprime Cloudflare (comando di anteprima o configurazione Wrangler).
2. Concordare e provare il recapito reale del modulo, con quota e protezioni anti-spam.
3. Completare `privacy.html` con i dati reali e farla rivedere.
4. Ottenere dal cliente le informazioni mancanti e le foto reali; poi `og:image`, testi alternativi e peso delle immagini.
5. Decidere la struttura multilingua (URL IT/EN, `hreflang`, sitemap): oggi il cambio lingua è lato client.
6. Calendari ed email: solo dopo aver capito chi aggiorna oggi la disponibilità. Non promettere assenza di overbooking con la sola sincronizzazione.
