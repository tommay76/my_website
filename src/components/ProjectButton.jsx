import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'

function ProjectButton ({ title, link, image }) {
  return (
    <Link to={link}>
      <button className='myButton'>
        <div className='projectContainer'>
          <img src={image} alt={title + 'image'} />
          <h2>{title}</h2>
        </div>
      </button>
    </Link>
  )
}
export default ProjectButton
