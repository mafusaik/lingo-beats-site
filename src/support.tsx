import { createRoot } from 'react-dom/client';
import { SupportPage } from './pages/SupportPage';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<SupportPage />);
}
