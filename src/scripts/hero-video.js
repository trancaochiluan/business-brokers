const heroVideo = document.querySelector('[data-hero-video]');

if (heroVideo instanceof HTMLVideoElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;

  if (!reducedMotion && !saveData) {
    heroVideo.querySelectorAll('source[data-src]').forEach((source) => {
      if (!(source instanceof HTMLSourceElement)) return;
      const sourceUrl = source.dataset.src;
      if (!sourceUrl) return;
      source.src = sourceUrl;
      source.removeAttribute('data-src');
    });
    heroVideo.load();
    void heroVideo.play().catch(() => undefined);
  }
}
