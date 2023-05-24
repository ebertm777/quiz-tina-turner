export default function triggerPageView(urlPathVirtual = location.pathname) {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'pageviewVirtualGA',
    urlPathVirtual,
  });
}
