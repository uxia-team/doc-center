(() => {
  if (window.location.hostname !== 'eu.uxia.app' || window.__uxiaRegionalLinks) return;
  window.__uxiaRegionalLinks = true;
  function adapt(link) {
    const url = new URL(link.href, window.location.href);
    if (url.origin !== 'https://platform.uxia.app') return;
    url.hostname = 'eu.uxia.app';
    link.href = url.toString();
    link.dataset.uxiaRegionalLink = 'true';
  }
  function update() { document.querySelectorAll('a[href]').forEach(adapt); }
  update();
  window.addEventListener('mintlify:navigate', update);
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link) return;
    adapt(link);
    // Use the updated native href rather than a router handler holding the original US URL.
    if (link.dataset.uxiaRegionalLink) event.stopImmediatePropagation();
  }, true);
})();
