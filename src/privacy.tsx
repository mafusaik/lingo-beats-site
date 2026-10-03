import { createRoot } from 'react-dom/client';
import { PrivacyPage } from './pages/PrivacyPage';
import { NavigationProvider } from './context/NavigationContext';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <NavigationProvider defaultScreen="privacy">
      <PrivacyPage />
    </NavigationProvider>
  );
}
