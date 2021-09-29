import React from 'react'
import '../css/ImageGrid.css'

function ImageGrid ({ setSelectedImage, images }) {
  const gridItems = images

  return (
    <div className='grid'>
      {images.length !== 0 && (
        gridItems.map((image, index) => {
          return (
            <div
              className='gridItem'
              key={'image' + index}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={'image' + index}

              />
            </div>
          )
        }
        )
      )}
    </div>
  )
}
export default ImageGrid
