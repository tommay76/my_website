import { React, useEffect, useState } from 'react'
// images
import render from '../images/projects/variousModelling/render 8.jpeg'
import bedroom from '../images/projects/variousModelling/bedroom.png'
import jail from '../images/projects/variousModelling/jail inner.png'
import jail2 from '../images/projects/variousModelling/jail outer.png'

import ImageGrid from '../components/ImageGrid'
import Modal from '../components/Modal'

import BackToTopButton from '../components/BackToTopButton'
import ProjectsBlock from '../components/ProjectsBlock'

function ModellingPage () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [render, bedroom, jail, jail2]

  return (
    <div>
      <div className='filmFinderBody'>
        <h1>Some Renders I've made :)</h1>
        <div className='modellingBanner' />
        <div className='contentBlock'>
          <h3>Programs Used: Maya | Photoshop (for touch-ups)</h3>
          <p>
            Done for a intro to vfx subject. I created models, textures, lights and shaders to create realistic rendered scenes.
          </p>
          <p>
            The bedroom is built upon the ideas of the novel 1984 by George Orwell, of which you may notice a passage quoted on the wall. The prison island was actually a collaboration with another student using assets from both our individual projects.
          </p>
        </div>
        <div className='contentBlock'>
          <h3>Library</h3>
          <ImageGrid setSelectedImage={setSelectedImage} images={images} />
        </div>
        <ProjectsBlock currentProject='Some 3D modelling' />
        <BackToTopButton />
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </div>
  )
}
export default ModellingPage
