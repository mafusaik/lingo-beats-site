export const getBasePath = (): string => {
  if (typeof window === 'undefined') return '';
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const knownPages = ['privacy', 'terms', 'support', 'privacy.html', 'terms.html', 'support.html', 'index.html'];
  
  if (segments.length > 0 && !knownPages.includes(segments[0].toLowerCase())) {
    return `/${segments[0]}`;
  }
  return '';
};

export const getRoute = (path: string): string => {
  const base = getBasePath();
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  
  if (!clean) {
    return base ? `${base}/` : '/';
  }
  return base ? `${base}/${clean}/` : `/${clean}/`;
};
