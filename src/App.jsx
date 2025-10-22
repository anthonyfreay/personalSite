import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

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

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RemoveTrailingSlash>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<Work />} />
            <Route path='/live' element={<Live />} />
            <Route path='/apparel' element={<Apparel />} />
            <Route path='/bw' element={<BlackWhite />} />
            <Route path='/everettstudios' element={<EverettStudios />} />
            <Route path='/posters' element={<Posters />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/people' element={<People />} />
            <Route path='/places' element={<Places />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/events' element={<Events />} />
          </Routes>
          </Suspense>
        </RemoveTrailingSlash>
      </Router>
    </HelmetProvider>
  );
}

export default App;
