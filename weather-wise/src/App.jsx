import Home from './pages/Home'
import Health from './pages/Health'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/health' element={<Health />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
