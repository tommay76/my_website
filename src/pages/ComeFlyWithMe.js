import { useEffect, useState, React } from 'react'
import 'react-multi-carousel/lib/styles.css'
import cutepic from '../images/cute.jpg'
import '../css/ProjectPage.css'
import { Link } from 'react-router-dom'

import landcolor from '../images/projects/comeflywithme/landcolor.png'
import morecode from '../images/projects/comeflywithme/morecode.png'
import someCode from '../images/projects/comeflywithme/someCode.png'
import skyshot from '../images/projects/comeflywithme/skyshot.png'
import mapcontroller from '../images/projects/comeflywithme/mapcontroller.png'
import constellations from '../images/projects/constellation.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import falling from '../images/falling.png'
import sickday from '../images/sickday.png'
// import shallR from '../images/shallR.png'
import FilmFinderImage from '../images/projects/filmfinderhome.png'
import Room from '../images/room.png'

import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'

import ProjectButton from '../components/ProjectButton'
function ComeFlyWithMe () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [landcolor, morecode, someCode, skyshot, mapcontroller]
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
    }
  ]
  return (
    <div>
      <div className='comeFlyWithMeBody'>
        <h1>Come Fly With Me</h1>
        <div className='comeFlyWithMeBanner' />
        <div className='contentBlock'>
          <h3>Written in: C#</h3>
          <p>
            This work was a culmination of multiple experiments of interesting
            algorithms I found.
          </p>
          <p>
            Built in Unity using C#, I used perlin noise to create landscapes
            that are traversed over by a plane. The landscape has a multitude of
            interactive variables that influence the shape and colour of the
            landscape. The plane itself is controlled using motion capture via a
            Kinect V2. There are also multiple other AI controlled planes
            traversing the landscape using various flocking algorithms. I also
            created the soundtrack myself, and all sounds featured are reactive
            to proximity.
          </p>
          <p>
            The trickiest part of the project was the maths that related to
            simultaneously keeping the plane centred and having the planes and
            environment rotate and translate properly around it when it turned.
          </p>
          <Link to='/dashboard'>
            <button>Back to home page</button>
          </Link>
        </div>
        <div className='contentBlock'>
          <h3>Library</h3>
          <ImageGrid images={images} setSelectedImage={setSelectedImage} />
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
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
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

export default ComeFlyWithMe
