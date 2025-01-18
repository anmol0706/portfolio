import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load components
const ScrollProgress = lazy(() => import('./components/ScrollProgress'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const App = lazy(() => import('./App.jsx'));

// Add loading states with custom fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Layout component to wrap common elements
const Layout = ({ children }) => (
  <ThemeProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollProgress />
      <BackToTop />
      {children}
    </Suspense>
  </ThemeProvider>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Layout>
    </ErrorBoundary>
  </StrictMode>,
);
