/* Movimento avanzato: Lenis (scroll fluido) + GSAP ScrollTrigger.
   Si attiva solo se le librerie sono caricate e l'utente non ha chiesto meno movimento.
   Altrimenti resta il comportamento di base di script.js e del CSS. */
(function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches || !window.gsap || !window.ScrollTrigger || !window.Lenis) return;

    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add('gsap-motion');

    /* Scroll fluido; le ancore rispettano scroll-padding-top del CSS (header fisso) */
    var lenis = new Lenis({ anchors: true, allowNestedScroll: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);

    /* Comparsa a gruppi, con leggero sfalsamento. Solo opacità: gli elementi restano raggiungibili da tastiera */
    gsap.set('.rv', { opacity: 0, y: 18 });
    ScrollTrigger.batch('.rv', {
        start: 'top 88%',
        once: true,
        onEnter: function (els) {
            gsap.to(els, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', stagger: .1, overwrite: true });
        }
    });

    /* Parallasse lieve del pulviscolo nell'hero */
    var fx = document.querySelector('.hero-fx');
    if (fx) {
        gsap.to(fx, {
            yPercent: 14, ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
        });
    }
})();