import ReactGA from 'react-ga';

const TRACKING_ID = 'G-T3B855T0MP'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
