import { createRoot } from 'react-dom/client';
import './index.module..css';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import { BrowserRouter } from 'react-router-dom';

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.append(div);

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const root = createRoot(rootElement);

  root.render(
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  );
} else {
  console.error('Root element not found');
}
