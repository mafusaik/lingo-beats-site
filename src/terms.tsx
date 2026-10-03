import { createRoot } from 'react-dom/client';
import { TermsPage } from './pages/TermsPage';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<TermsPage />);
}
