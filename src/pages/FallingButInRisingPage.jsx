import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

// video
import VideoPlayer from 'react-video-js-player'
import falling from '../videos/lowres.mp4'

import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'

function FallingButInRisingPage () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [render, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8]

  return (
    <div>
      <div className='fallingBody'>
        <h1>Falling But In Rising</h1>
        <div className='videoPlayer'>
          <VideoPlayer
            src={falling}
            poster={render}
            width='720'
            height='405'
          />
        </div>
        <div className='contentBlock'>
          <h3>Programs Used: After Effects (character animation) | Photoshop (Drawings) | Premiere Pro (compositing)</h3>
          <p>
            This animation tells the story of an engel who loses their wings, and their journey to rebuild and heal.
          </p>
          <p>
            This work was my highschool Visual Arts major work, which I made in 2016. It went on to win a V-Fest short Film Award for student animations and also featured in the Mosman art prize.
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
export default FallingButInRisingPage
