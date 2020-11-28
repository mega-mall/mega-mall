import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-3QH0TEYG6M', {
    debug: true,
    titleCase: false,
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  });
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
