import { createRoot } from 'react-dom/client';
import { SupportPage } from './pages/SupportPage';
import { NavigationProvider } from './context/NavigationContext';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <NavigationProvider defaultScreen="support">
      <SupportPage />
    </NavigationProvider>
  );
}
