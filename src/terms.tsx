import { createRoot } from 'react-dom/client';
import { TermsPage } from './pages/TermsPage';
import { NavigationProvider } from './context/NavigationContext';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <NavigationProvider defaultScreen="terms">
      <TermsPage />
    </NavigationProvider>
  );
}
