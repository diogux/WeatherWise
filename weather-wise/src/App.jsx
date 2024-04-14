import Home from './pages/Home'
import Health from './pages/Health'
import Forecast from './pages/Forecast'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/health' element={<Health />} />
        <Route path='/forecast' element={<Forecast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
