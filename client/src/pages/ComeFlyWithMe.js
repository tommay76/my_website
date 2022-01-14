import { useEffect, useState, React } from 'react'
import 'react-multi-carousel/lib/styles.css'
import '../css/ProjectPage.css'

import landcolor from '../images/projects/comeflywithme/landcolor.png'
import morecode from '../images/projects/comeflywithme/morecode.png'
import someCode from '../images/projects/comeflywithme/someCode.png'
import skyshot from '../images/projects/comeflywithme/skyshot.png'
import mapcontroller from '../images/projects/comeflywithme/mapcontroller.png'

import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'
import ProjectsBlock from '../components/ProjectsBlock'

import BackToTopButton from '../components/BackToTopButton'
function ComeFlyWithMe () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [landcolor, morecode, someCode, skyshot, mapcontroller]

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
        </div>
        <div className='contentBlock'>
          <h3>Library</h3>
          <ImageGrid images={images} setSelectedImage={setSelectedImage} />
        </div>
        <ProjectsBlock currentProject='Come Fly With Me' />
        <BackToTopButton />
      </div>
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  )
}

export default ComeFlyWithMe
