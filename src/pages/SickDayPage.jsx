import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// images
import pics from '../images/projects/sickDay/pics.jpg'
import bloodflow from '../images/projects/sickDay/bloodflow.gif'
import bloodflowwithrendereffect from '../images/projects/sickDay/bloodflow with render effect.jpg'
import green from '../images/projects/sickDay/green.gif'
import mitosis from '../images/projects/sickDay/mitosis.gif'
import porple from '../images/projects/sickDay/porple.gif'


//video 
import VideoPlayer from 'react-video-js-player'
import SickDay from '../videos/sickDay.mp4'

import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'

function SickDayPage () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [pics, bloodflow, bloodflowwithrendereffect, green, mitosis, porple]

  return (
    <div>
      <div className='sickDayBody'>
        <h1>Sick Day</h1>
        <div className='videoPlayer'>
          <VideoPlayer
            src={SickDay}
            poster={pics}
            width='720'
            height='405'
          />
        </div>
        <div className='contentBlock'>
          <h3>Programs Used:Maya | litlle bit of After Effects</h3>
          <p>
            Part of a 4 person group project, I made the models for bacteria and blood cells and rendered them for a short film.
          </p>
          <Link to='/dashboard'>
            <button>Back to home page</button>
          </Link>
        </div>
        <div className='contentBlock'>
          <h3>Library</h3>
          <ImageGrid setSelectedImage={setSelectedImage} images={images} />
        </div>
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </div>
  )
}
export default SickDayPage
