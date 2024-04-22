import Home from './pages/Home'
import Health from './pages/Health'
import Forecast from './pages/Forecast'
import Crops from './pages/Crops'
import Travel from './pages/Travel'
import Storms from './pages/Storms'
import AboutUs from './pages/AboutUs'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/health' element={<Health />} />
        <Route path='/forecast' element={<Forecast />} />
        <Route path='/crops' element={<Crops />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/storms' element={<Storms />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
