import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// images
import homepage from '../images/projects/filmFinderPage/homepage.png'
import moviepage from '../images/projects/filmFinderPage/moviepage.png'
import profilepage from '../images/projects/filmFinderPage/profilepage.png'
import searchpage from '../images/projects/filmFinderPage/search.png'
import settingspage from '../images/projects/filmFinderPage/settingspage.png'
import lightmodehome from '../images/projects/filmFinderPage/lightmodehome.png'
import lightmodesearch from '../images/projects/filmFinderPage/lightmodesearch.png'

import ProjectButton from '../components/ProjectButton'
// Images
import constellations from '../images/projects/constellation.png'
import falling from '../images/falling.png'
import sickday from '../images/sickday.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import Room from '../images/room.png'
import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'

function FilmFinder () {
  const projects = [
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
  ]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [homepage, moviepage, profilepage, searchpage, settingspage, lightmodehome, lightmodesearch]

  return (
    <div>
      <div className='filmFinderBody'>
        <h1>Film Finder</h1>
        <div className='filmFinderBanner' />
        <div className='contentBlock'>
          <h3>Written in: JavaScript ( MongoDB | Express | React | Node )</h3>
          <p>
            A university project written by myself and four other students. It
            was written on a MERN framework (MongoDB, Express, React, Node).
            Whilst we all contributed to multiple backend and database code, I
            was mainly working on the frontend. The site utilizes Material UI,
            has a togglable dark mode, and is mobile friendly.
          </p>
          <p>
            Due to plaigirism rules, I cannot show the code publicly, but send
            me a message, and I'll be happy to chat about it.
          </p>
        </div>
        <div className='contentBlock'>
          <h3>Library</h3>
          <ImageGrid setSelectedImage={setSelectedImage} images={images} />
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
      {selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </div>
  )
}
export default FilmFinder
