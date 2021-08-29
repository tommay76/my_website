import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
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
        <Switch>
          <Route path='/dashboard' exact component={HomePage} />
          <Route path='/comeFlyWithMe' exact component={ComeFlyWithMe} />
          <Route path='/constellations' exact component={Constellations} />
          <Route path='/contact' exact component={ContactPage} />
          <Route path='/fallingButInRising' exact component={FallingButInRisingPage} />
          <Route path='/filmFinder' exact component={FilmFinder} />
          <Route path='/modelling' exact component={ModellingPage} />
          <Route path='/nameadder' exact component={NameAdder} />
          <Route path='/sickDay' exact component={SickDayPage} />
          <Route path='/' exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
