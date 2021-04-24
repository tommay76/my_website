import { React, useEffect } from 'react'
import '../css/HomePage.css'
import { Link } from 'react-router-dom'
// import Child from './components/element'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import cutepic from '../images/cute.jpg'
import constellations from '../images/projects/constellation.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import shallR from '../images/shallR.png'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Headphones from '../images/reactComponents/Headphones'
import Controller from '../images/reactComponents/Controller'
import Pc from '../images/reactComponents/Pc'

function HomePage () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mainBody'>
      <div className='iconsContainer'>
        <div className='PC'> <Pc /></div>
        <div className='Headphones'> <Headphones /></div>
        <div className='Controller'> <Controller /></div>
      </div>
      <div className='mainHeader'>
        <div className='displayPic' />
        <h1>Thomas Doyle</h1>
        <hr className='hrTitle' />
        <h3>Designer | Developer</h3>
      </div>
      <div className='contentBlock'>
        <h3>About me:</h3>
        <p>
          I am a 23 year old student based in Sydney, Australia looking to make
          a break into software engineering. I have been a massive fan of
          computers since I was a little bub and have always pioneered to learn
          and create.
        </p>
        <p>
          My interests vary from 2D/3D animation and character design to Cyber
          Security and Frontend Software design. I'm comfortable with Python and
          the linux environment, and am familiar with version control software
          such as Github.
        </p>
      </div>
      <div className='contentBlock' id='education'>
        <h3>Education:</h3>
        <h2>University of New South Wales:</h2>
        <h3>
          Bachelor of Computer Science / Bachelor of Media Arts (Double Degree)
        </h3>
        <h4>2017- 2021</h4>
        <p>
          I started out my tertiary education studying a Bachelor of Media Arts,
          a degree which focussed on how digital media can be used to create
          art. Whilst this degree was rewarding, I felt that it was not
          technically focussed enough, and so in 2018, I switched to a double
          degree in Computer Science. From my Media Arts degree I have learnt a
          range of creative Skills such as:
        </p>
        <ul>
          <li> Graphic Design</li>
          <li>3D modelling and animation</li>
          <li>Interactive Design </li>
        </ul>
        <p>
          My Computer Science education has taught me a range of general
          programming skills and principles, such as Object-Oriented Design, the
          SOLID principles and Agile Development methodologies, as well as
          fostered my interest in specific disciplines. Cyber Security and
          Frontend Software design are particular areas of interest. I'm
          comfortable with Python and the linux environment, and I'm familiar
          with version control/management software such as Github and Jira.
        </p>
        <Accordion style={{ boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Computer Science Subjects:</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Introduction to Programming | Computer Systems Fundamentals |
              Software Engineering Fundamentals | Data Structures and Algorithms
              | O-O Design & Programming | Extended Security Engineering |
              Computer Networks & Applications | Concepts of Programming
              Languages | Operating Systems | Algorithms & Programming Tech |
              Securing Fixed & Wireless Networks | Web Application Security |
              Security Assessment | Digital Forensics | Mathematics 1A |
              Mathematics 1B | Discrete Mathematics | Management and Ethics |
              Computer Science Project
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Media Arts Subjects:</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Studio Gpteway 1 | Studio Gateway 2 | Creative Practices: Methods
              | Media Arts Gateway 1 | Media Arts Gateway 2 | Creative
              Practices: Contexts | Integrated Design Computing 2 | Drawing |
              Media Art in the 21st Century | The 3D Animated Body | CGI Lens
              Lab | Systems for Interactive Media | Visual Effects Project |
              Interactive Installation | Interactive Visualisation |
              Professional Practice
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='contentBlock' id='projects'>
        <h3>Skills:</h3>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4> JavaScript: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_JS' />
          </div>
          <p>
            The newest addition to my language arsenal, JavaScript is the
            current language I’m actively learning as part of my web-dev
            education, albeit in a self-learned sense rather than formally.
            Whilst I have experience using frameworks and libraries such as
            React, Express, Node.js and Mongo.db to create well functioning
            websites, I would say it’s my weakest language as I have little
            experience with the vanilla language. That being said, who uses
            vanilla JavaScript these days.{' '}
          </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4> Java: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_Java' />
          </div>
          <p>
            I like this language because it is cool. I like this language
            because it is cool{' '}
          </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4> Python: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_Python' />
          </div>
          <p>
            I like this language because it is cool. I like this language
            because it is cool{' '}
          </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4> C: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_C' />
          </div>
          <p>
            I like this language because it is cool. I like this language
            because it is cool{' '}
          </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4> Unix: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_Unix' />
          </div>
          <p>
            I like this language because it is cool. I like this language
            because it is cool{' '}
          </p>
        </div>
      </div>
      <div className='contentBlock' id='projects'>
        <h3>Projects:</h3>
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
                <img src={shallR} alt='andyoushallreceive' />
                <h2>And you shall recieve</h2>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
