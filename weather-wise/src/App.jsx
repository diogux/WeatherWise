import React from 'react';
import Home from './pages/Home';
import Health from './pages/Health';
import Forecast from './pages/Forecast';
import Crops from './pages/Crops';
import Travel from './pages/Travel';
import Storms from './pages/Storms';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardOrderProvider } from './components/CardOrderContext'; // Make sure the path matches where you've created the context

function App() {
  return (
    <BrowserRouter>
      <CardOrderProvider> {/* Wrap the Routes component in the CardOrderProvider */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/health' element={<Health />} />
          <Route path='/forecast' element={<Forecast />} />
          <Route path='/crops' element={<Crops />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/storms' element={<Storms />} />
          <Route path='/AboutUs' element={<AboutUs />} /> {/* Ensure URL paths are consistent and preferably lowercased */}
          <Route
              path="*"
              element={<PageNotFound />}
          />
        </Routes>
      </CardOrderProvider>
    </BrowserRouter>
  )
}

export default App;
