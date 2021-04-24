import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'
import './css/App.css'
import HomePage from './pages/HomePage'
import Constellations from './pages/Constellations'
import ContactPage from './pages/ContactPage'
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
          <Route path='/contact' exact component={ContactPage} />
          <Route path='/nameadder' exact component={NameAdder} />
          <Route path='/constellations' exact component={Constellations} />
          <Route path='/comeFlyWithMe' exact component={ComeFlyWithMe} />
          <Route path='/filmFinder' exact component={Constellations} />
          <Route path='/' exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
