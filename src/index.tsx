import { createRoot } from 'react-dom/client';
import './index.module..css';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.append(div);

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const root = createRoot(rootElement);

  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} else {
  console.error('Root element not found');
}
