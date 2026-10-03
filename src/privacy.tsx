import { createRoot } from 'react-dom/client';
import { PrivacyPage } from './pages/PrivacyPage';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<PrivacyPage />);
}
