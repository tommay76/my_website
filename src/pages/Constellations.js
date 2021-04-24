import { useEffect, React } from 'react'
import 'react-multi-carousel/lib/styles.css'
import cutepic from '../images/cute.jpg'
import constellations from '../images/projects/constellation.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import '../css/ProjectPage.css'
import { Link } from 'react-router-dom'
// import Child from './components/element'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'

function Constellations () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='constellationsBody'>
      <h1>Constellations</h1>
      <div className='constellationsBanner' />
      <div className='contentBlock'>
        <h3>Written in: Java</h3>
        <p>
          This was a quick project to demonstrate an ability to parse JSON
          objects in Java in a fun and interactive project. Using a JSON Object
          of constellations, inclusive of star’s exact coordinates and the
          relations between individual stars and constellations, I created an
          interactive 3D graphic which maps the JSON object over a sphere, with
          lines connecting each star within a constellation. The JSON Object can
          be found here. The graphic was built using Processing, a graphical
          coding language built off of java.
        </p>
        <Link to='/dashboard'>
          <button>Back to home page</button>
        </Link>
      </div>
      <div className='contentBlock'>
        <h3>Other Projects</h3>
        <div className='projectsBlock'>
          <Link to='/constellations'>
            <button className='myButton'>
              <div className='projectContainer'>
                <img src={constellations} alt='constellations' />
                <h2>Constellations</h2>
              </div>
            </button>
          </Link>
          <Link to='/comeFlyWithMe'>
            <button className='myButton'>
              <div className='projectContainer'>
                <img src={comeFlyWithMe} alt='comeFlyWithMe' />
                <h2>Come Fly With Me</h2>
              </div>
            </button>
          </Link>
          <Link to='/nameadder'>
            <button className='myButton'>
              <div className='projectContainer'>
                <img src={cutepic} alt='andyoushallreceive' />
                <h2>And you shall recieve</h2>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Constellations
