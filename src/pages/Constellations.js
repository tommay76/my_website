import { useEffect, React } from 'react'
import 'react-multi-carousel/lib/styles.css'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import '../css/ProjectPage.css'
import { Link } from 'react-router-dom'

import ProjectButton from '../components/ProjectButton'
// Images
import falling from '../images/falling.png'
import sickday from '../images/sickday.png'
import Room from '../images/room.png'
import FilmFinderImage from '../images/projects/filmfinderhome.png'

// import Child from './components/element'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'

function Constellations () {
  const projects = [
    {
      title: 'Film Finder',
      image: FilmFinderImage,
      link: '/filmFinder'
    },
    {
      title: 'Some 3D modelling',
      image: Room,
      link: '/modelling'
    },
    {
      title: 'Falling but in Rising',
      image: falling,
      link: '/fallingButInRising'
    },
    {
      title: 'Sick Day',
      image: sickday,
      link: '/sickDay'
    },
    {
      title: 'Come Fly With Me',
      image: comeFlyWithMe,
      link: '/comeFlyWithMe'
    }
  ]
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
      </div>
      <div className='contentBlock'>
        <h3>Other Projects</h3>
        <div className='projectsBlock'>
          {projects.length !== 0 && (
            projects.map((project) => (
              <ProjectButton
                title={project.title}
                link={project.link}
                image={project.image}
                key={project.title + 'button'}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Constellations
