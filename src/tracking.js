export function trackEvent(name, props) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  window && typeof window.plausible === 'function' && window.plausible(name, { props });
}
