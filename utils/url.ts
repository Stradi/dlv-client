const validProviders = ['youtube.com', 'dailymotion.com', 'vimeo.com'];

const validateURL = (url: string): string | null => {
  if (!isValid(url)) {
    return 'URL is not valid.';
  } else if (!isProviderSupported(url)) {
    return 'Provider is not supported.';
  } else {
    return null;
  }
};

const isValid = (url: string): boolean => {
  let _url: URL;
  try {
    _url = new URL(url);
  } catch (_) {
    return false;
  }

  return _url.protocol === 'http:' || _url.protocol === 'https:';
};

const isProviderSupported = (url: string): boolean => {
  return validProviders.some((provider) =>
    url.indexOf(provider) == -1 ? false : true
  );
};

export { validateURL };
