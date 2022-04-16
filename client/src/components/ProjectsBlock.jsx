import React, { useEffect, useRef, useState } from 'react'

import ProjectButton from '../components/ProjectButton'
// Images
import constellations from '../images/projects/constellation.png'
import falling from '../images/falling.png'
import sickday from '../images/sickday.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import Room from '../images/room.png'
import FilmFinderImage from '../images/projects/filmfinderhome.png'

//css
import '../css/ProjectsBlock.css'



function ProjectBlock ({ currentProject }) {

  const ref = useRef()

  const tags = [
    'All',
    '2D',
    '3D',
    'After Effects',
    'Animation',
    'C#',
    'Express',
    'Interactive',
    'Java',
    'Javascript',
    'Maya',
    'MongoDB',
    'Photoshop',
    'Premiere Pro',
    'React',
    'Unity'
  ]
  const projects = [
    {
      title: 'Film Finder',
      image: FilmFinderImage,
      link: '/filmFinder',
      tags: ['Javascript','React','Express','MongoDB']
    },
    {
      title: 'Some 3D modelling',
      image: Room,
      link: '/modelling',
      tags: ['Maya','3D']
    },
    {
      title: 'Falling but in Rising',
      image: falling,
      link: '/fallingButInRising',
      tags: ['Photoshop','After Effects','Premiere Pro','2D', 'Animation']
    },
    {
      title: 'Sick Day',
      image: sickday,
      link: '/sickDay',
      tags: ['After Effects','Maya','Premiere Pro','3D', 'Animation']
    },
    {
      title: 'Constellations',
      image: constellations,
      link: '/constellations',
      tags: ['Java','3D', 'Interactive']
    },
    {
      title: 'Come Fly With Me',
      image: comeFlyWithMe,
      link: '/comeFlyWithMe',
      tags: ['C#','3D', 'Interactive', 'Unity']
    }
  ].filter(m => {
      return m.title !== currentProject
  })
  const [filteredList, updateList] = useState([...projects])
  const [currentTag, updateCurrentTag] = useState('All')
  const [ isDropDownVisible, setDropDownVisible] = useState(false)

  const filterTags = (tag) => {
    if (tag === 'All'){
      updateList([...projects])
    }
    else{
      const filteredList = projects.filter(m => {
        return (m.tags.includes(tag))
      })
      updateList(filteredList)
    }
    updateCurrentTag(tag)
  }
  
  useEffect(()=>{},[currentTag])

  useEffect(() => {
    const closeOnOutsideClick = e => {
      if (isDropDownVisible && ref.current && !ref.current.contains(e.target)) {
        console.log("!Ref clicked")
        setDropDownVisible(false)
      }
    }
    console.log("adding event listener")
    document.addEventListener("click", closeOnOutsideClick);
    return () =>{
      document.removeEventListener("click", closeOnOutsideClick);
    }
  }, [isDropDownVisible])


  return (
    <div className='home-content-block' id='projects'>
      <h3>Projects:</h3>
      <button className='tag-button' onClick={() => setDropDownVisible(prev => !prev)}>
        {/* onClick={setDropDownVisible(true)} */}
        {currentTag}  
        <i className="arrow-down"></i>
      </button>
      { isDropDownVisible && (
        <div className='tag-list' ref={ref} >
          <ul className='project-ul'>
            {tags.map((t) => (
              <li className='project-li' key={t} onClick={() => {filterTags(t); setDropDownVisible(prev => !prev)}} >
                {/* onClick={updateCurrentTag} */}
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='projectsBlock'>
        {filteredList.length !== 0 && (
          filteredList.map((project) => (
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
  )
}
export default ProjectBlock
