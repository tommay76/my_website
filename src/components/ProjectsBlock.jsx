import React from 'react'

import ProjectButton from '../components/ProjectButton'
// Images
import constellations from '../images/projects/constellation.png'
import falling from '../images/falling.png'
import sickday from '../images/sickday.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import Room from '../images/room.png'
import FilmFinderImage from '../images/projects/filmfinderhome.png'

function ProjectBlock ({ currentProject }) {
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
      title: 'Constellations',
      image: constellations,
      link: '/constellations'
    },
    {
      title: 'Come Fly With Me',
      image: comeFlyWithMe,
      link: '/comeFlyWithMe'
    }
  ].filter(m => {
    return m.title !== currentProject
  })

  return (
    <div className='contentBlock' id='projects'>
      <h3>Projects:</h3>
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
  )
}
export default ProjectBlock
