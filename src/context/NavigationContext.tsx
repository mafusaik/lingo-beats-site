import React, { createContext, useContext, useState, useEffect } from 'react';

export type Screen = 'home' | 'privacy' | 'terms' | 'support';

interface NavigationContextType {
  screen: Screen;
  navigateTo: (screen: Screen) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  screen: 'home',
  navigateTo: () => {},
});

export const detectInitialScreen = (): Screen => {
  if (typeof window === 'undefined') return 'home';

  const hash = (window.location.hash || '').toLowerCase();
  const search = (window.location.search || '').toLowerCase();
  const pathname = (window.location.pathname || '').toLowerCase();

  if (
    hash.includes('privacy') ||
    search.includes('page=privacy') ||
    search.includes('screen=privacy') ||
    pathname.includes('privacy')
  ) {
    return 'privacy';
  }

  if (
    hash.includes('terms') ||
    search.includes('page=terms') ||
    search.includes('screen=terms') ||
    pathname.includes('terms')
  ) {
    return 'terms';
  }

  if (
    hash.includes('support') ||
    search.includes('page=support') ||
    search.includes('screen=support') ||
    pathname.includes('support')
  ) {
    return 'support';
  }

  return 'home';
};

export const NavigationProvider: React.FC<{
  children: React.ReactNode;
  defaultScreen?: Screen;
}> = ({ children, defaultScreen }) => {
  const [screen, setScreen] = useState<Screen>(defaultScreen ?? detectInitialScreen());

  useEffect(() => {
    const handleUrlChange = () => {
      setScreen(detectInitialScreen());
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateTo = (newScreen: Screen) => {
    setScreen(newScreen);
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }

    // Update browser URL hash so back/forward navigation and reload work
    if (newScreen === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = `#${newScreen}`;
    }
  };

  return (
    <NavigationContext.Provider value={{ screen, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
