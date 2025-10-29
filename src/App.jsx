import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { SmoothScrollProvider } from './components/providers/SmoothScrollProvider';
import './App.css';

// Lazy load components
const AppRoutes = lazy(() => import('./routes/AppRoutes'));
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const Cursor = lazy(() => import('./components/shared/Cursor'));
const ParticlesBackground = lazy(() => import('./components/shared/ParticlesBackground'));
const LoadingScreen = lazy(() => import('./components/shared/LoadingScreen'));

// Fallback component for Suspense
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-dark z-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <SmoothScrollProvider>
          <Suspense fallback={<PageLoader />}>
            <div className="relative min-h-screen flex flex-col bg-dark overflow-x-hidden">
              <Cursor />
              <ParticlesBackground />

              {/* Loading Screen - Outside everything */}
              <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loading" />}
              </AnimatePresence>

              {/* Navbar sits on top always */}
              <Navbar />

              {/* Page Content */}
              <main className="flex-grow relative z-10">
                <AppRoutes />
              </main>

              {/* Footer sticks full width */}
              <footer className="w-full relative z-10">
                <Footer />
              </footer>
            </div>
          </Suspense>
        </SmoothScrollProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;