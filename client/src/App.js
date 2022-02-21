import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './css/App.css'
import HomePage from './pages/HomePage'
import Constellations from './pages/Constellations'
import FallingButInRisingPage from './pages/FallingButInRisingPage'
import FilmFinder from './pages/FilmFinder'
import SickDayPage from './pages/SickDayPage'
import ContactPage from './pages/ContactPage'
import ModellingPage from './pages/ModellingPage'
import NotFound from './pages/NotFound'
import NameAdder from './pages/NameAdder'
import ComeFlyWithMe from './pages/ComeFlyWithMe'
import AppBar from './components/AppBar'

function App () {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path='/dashboard' exact element={<HomePage/>} />
          <Route path='/comeFlyWithMe' exact element={<ComeFlyWithMe/>} />
          <Route path='/constellations' exact element={<Constellations/>} />
          <Route path='/contact' exact element={<ContactPage/>} />
          <Route path='/fallingButInRising' exact element={<FallingButInRisingPage/>} />
          <Route path='/filmFinder' exact element={<FilmFinder/>} />
          <Route path='/modelling' exact element={<ModellingPage/>} />
          <Route path='/nameadder' exact element={<NameAdder/>} />
          <Route path='/sickDay' exact element={<SickDayPage/>} />
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
