import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load components
const ScrollProgress = lazy(() => import('./components/ScrollProgress'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const App = lazy(() => import('./App.jsx'));

// Enhanced loading component with props
const Loading = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    <p className="text-gray-600 dark:text-gray-300 animate-pulse">{message}</p>
  </div>
);

// Add error retry logic
const RetryableErrorBoundary = ({ children }) => (
  <ErrorBoundary
    fallback={({ error, resetError }) => (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-red-500">Something went wrong: {error.message}</p>
        <button
          onClick={resetError}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    )}
  >
    {children}
  </ErrorBoundary>
);

const Layout = ({ children }) => (
  <ThemeProvider>
    <Suspense fallback={<Loading />}>
      <ScrollProgress />
      <BackToTop />
      {children}
    </Suspense>
  </ThemeProvider>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RetryableErrorBoundary>
      <Layout>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Layout>
    </RetryableErrorBoundary>
  </StrictMode>,
);
