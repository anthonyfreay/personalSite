import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Loading from './Components/Util/Loading/Loading';
import ErrorBoundary from './Components/Util/ErrorBoundary/ErrorBoundary';
import Analytics from './Components/Util/Analytics';

/// Lazy-loaded components
const Home = lazy(() => import('./Components/Pages/Home/Home'));
const Contact = lazy(() => import('./Components/Pages/Contact/Contact'));
const Work = lazy(() => import('./Components/Pages/Work/Work'));
const Live = lazy(() => import('./Components/Pages/Live/Live'));
const Apparel = lazy(() => import('./Components/Pages/Apparel/Apparel'));
const BlackWhite = lazy(() => import('./Components/Pages/BlackWhite/BlackWhite'));
const EverettStudios = lazy(() => import('./Components/Pages/EverettStudios/EverettStudios'));
const Posters = lazy(() => import('./Components/Pages/Posters/Posters'));
const Resume = lazy(() => import('./Components/Pages/Resume/Resume'));
const People = lazy(() => import('./Components/Pages/People/People'));
const Places = lazy(() => import('./Components/Pages/Places/Places'));
const Cars = lazy(() => import('./Components/Pages/Cars/Cars'));
const Events = lazy(() => import('./Components/Pages/Events/Events'));
const NotFound = lazy(() => import('./Components/Pages/NotFound/NotFound'));

// Component to remove trailing slashes
function RemoveTrailingSlash({ ...rest }) {
  const location = useLocation();

  // If the path has a trailing slash (and it's not just '/'), redirect without it
  if (location.pathname !== '/' && location.pathname.endsWith('/')) {
    return (
      <Navigate
        replace
        {...rest}
        to={{
          pathname: location.pathname.slice(0, -1),
          search: location.search,
        }}
      />
    );
  }

  return rest.children;
}

// Handle GitHub Pages deep links: redirect from stored path set in public/404.html
function RedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectPath = sessionStorage.redirect || sessionStorage.getItem('redirect');
    if (redirectPath) {
      try { sessionStorage.removeItem('redirect'); } catch (e) { /* noop */ }
      try { delete sessionStorage.redirect; } catch (e) { /* noop */ }
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  return null;
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Page><Home /></Page>} />
        <Route path='/contact' element={<Page><Contact /></Page>} />
        <Route path='/work' element={<Page><Work /></Page>} />
        <Route path='/live' element={<Page><Live /></Page>} />
        <Route path='/apparel' element={<Page><Apparel /></Page>} />
        <Route path='/bw' element={<Page><BlackWhite /></Page>} />
        <Route path='/everettstudios' element={<Page><EverettStudios /></Page>} />
        <Route path='/posters' element={<Page><Posters /></Page>} />
        <Route path='/resume' element={<Page><Resume /></Page>} />
        <Route path='/people' element={<Page><People /></Page>} />
        <Route path='/places' element={<Page><Places /></Page>} />
        <Route path='/cars' element={<Page><Cars /></Page>} />
        <Route path='/events' element={<Page><Events /></Page>} />
        <Route path='*' element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RemoveTrailingSlash>
          <Suspense fallback={<Loading />}>
            <RedirectHandler />
            <Analytics />
            <ErrorBoundary>
              <AnimatedRoutes />
            </ErrorBoundary>
          </Suspense>
        </RemoveTrailingSlash>
      </Router>
    </HelmetProvider>
  );
}

export default App;
