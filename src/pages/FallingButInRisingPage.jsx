import { React, useEffect, useState } from 'react'
// images
import render from '../images/fallingPosterShot.png'
import sc1 from '../images/projects/fallingbutinrising/sc1.png'
import sc2 from '../images/projects/fallingbutinrising/sc2.png'
import sc3 from '../images/projects/fallingbutinrising/sc3.png'
import sc4 from '../images/projects/fallingbutinrising/sc4.png'
import sc5 from '../images/projects/fallingbutinrising/sc5.png'
import sc6 from '../images/projects/fallingbutinrising/sc6.png'
import sc7 from '../images/projects/fallingbutinrising/sc7.png'
import sc8 from '../images/projects/fallingbutinrising/sc8.png'

import constellations from '../images/projects/constellation.png'
import sickday from '../images/sickday.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
// import shallR from '../images/shallR.png'
import FilmFinderImage from '../images/projects/filmfinderhome.png'
import Room from '../images/room.png'

import ProjectButton from '../components/ProjectButton'
// video
// import VideoPlayer from 'react-video-js-player'

import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'

function FallingButInRisingPage () {
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
  const images = [render, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8]

  return (
    <div>
      <div className='fallingBody'>
        <h1>Falling But In Rising</h1>
        {/* <div className='videoPlayer'>
          <VideoPlayer
            src='https://www.youtube.com/watch?v=rhSSWxarnkM'
            poster={render}
            width='720'
            height='405'
          />
        </div> */}
        <div className='contentBlock'>
          <h3>Programs Used: After Effects (character animation) | Photoshop (Drawings) | Premiere Pro (compositing)</h3>
          <p>
            This animation tells the story of an engel who loses their wings, and their journey to rebuild and heal.
          </p>
          <p>
            This work was my highschool Visual Arts major work, which I made in 2016. It went on to win a V-Fest short Film Award for student animations and also featured in the Mosman art prize.
          </p>
          <div className='videoLinkButton'>
            <a href='https://youtu.be/rhSSWxarnkM' style={{textDecoration: 'none', fontWeight: 'bold', color: 'white'}}> Link To Video</a>
          </div>
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
export default FallingButInRisingPage
