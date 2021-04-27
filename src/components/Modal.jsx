import React from 'react'
import '../css/modal.css'

function Modal ({ selectedImage, setSelectedImage }) {
  const handleClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setSelectedImage(null)
    }
  }
  return (
    <div className='overlay' onClick={handleClick}>
      <img src={selectedImage} alt='selectedImage' />
    </div>
  );
}
export default Modal
