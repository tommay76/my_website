import React from 'react'
import { FaAngleUp } from 'react-icons/fa'
import '../css/BackToTopButton.css'
function BackToTopButton () {
  const scrollToTop = () => window.scrollTo(0, 0)
  return (
    <div className='backToTopButton' onClick={scrollToTop}>
      <FaAngleUp size={50} />
    </div>
  )
}
export default BackToTopButton
