const cacheControl =
  values =>
  ({ res }) => {
    if (!import.meta.server) return;

    const cacheControlValue = Object.entries(values)
      .map(([key, value]) => `${key}=${value}`)
      .join(',');

    res.setHeader('Cache-Control', cacheControlValue);
  };

export default cacheControl;
