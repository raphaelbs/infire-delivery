import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export function trackEvent(event) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  return trackCustomEvent(event);
}
