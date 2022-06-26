const isValid = (url: string): boolean => {
  let _url: URL;
  try {
    _url = new URL(url);
  } catch (_) {
    return false;
  }

  return _url.protocol === 'http:' || _url.protocol === 'https:';
};

export { isValid };
