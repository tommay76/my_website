import React from 'react'
import '../css/HomePage.css'
// import Child from './components/element'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'

function HomePage () {
  return (
    <div className='mainBody'>
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
          My interests vary from 2D/3D animation and character design to Cyber
          Security and Frontend Software design. I'm comfortable with Python and
          the linux environment, and am familiar with version control software
          such as Github.
        </p>
      </div>
      <div className='contentBlock' id='projects'>
        <h3>Skills:</h3>
        <div className='skillBox'>
          <div className='skillName'>
            
            <div style={{ display:'flex', justifyContent:'space-between'}}>
              <h4> JavaScript: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_JS' />
          </div>
          <p>I like this language because it is cool. I like this language because it is cool </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display:'flex', justifyContent:'space-between'}}>
              <h4> Java: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_Java' />
          </div>
          <p>I like this language because it is cool. I like this language because it is cool </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display:'flex', justifyContent:'space-between'}}>
              <h4> Python: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_Python' />
          </div>
          <p>I like this language because it is cool. I like this language because it is cool </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display:'flex', justifyContent:'space-between'}}>
              <h4> C: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_C' />
          </div>
          <p>I like this language because it is cool. I like this language because it is cool </p>
        </div>
        <div className='skillBox'>
          <div className='skillName'>
            <div style={{ display:'flex', justifyContent:'space-between'}}>
              <h4> Unix: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className='skillGraphic'>
            <div className='skillGraphicFill_Unix' />
          </div>
          <p>I like this language because it is cool. I like this language because it is cool </p>
        </div>
      </div>
      <div className='contentBlock' id='projects'>
        <h3>Projects:</h3>
      </div>
    </div>
  )
}

export default HomePage
