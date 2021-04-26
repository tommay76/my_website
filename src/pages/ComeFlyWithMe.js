import { useEffect, React } from 'react'
import 'react-multi-carousel/lib/styles.css'
import cutepic from '../images/cute.jpg'
import constellations from '../images/projects/constellation.png'
import comeFlyWithMe from '../images/projects/comeflywithme.png'
import '../css/ProjectPage.css'
import { Link } from 'react-router-dom'

function ComeFlyWithMe () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='comeFlyWithMeBody'>
      <h1>Come Fly With Me</h1>
      <div className='comeFlyWithMeBanner' />
      <div className='contentBlock'>
        <h3>Written in: C++</h3>
        <p>
          This work was a culmination of multiple experiments of interesting
          algorithms I found.
        </p>
        <p>
          Built in Unity using C++, I used perlin noise to create landscapes
          that are traversed over by a plane. The plane itself is controlled
          using motion capture via a Kinect V2. There are also multiple other AI
          controlled planes traversing the landscape using various flocking
          algorithms. I also created the soundtrack myself, and all sounds
          featured are reactive to proximity.
        </p>
        <p>
          The trickiest part of the project was the maths that related to
          simultaneously keeping the plane centred and having the planes and
          environment rotate and translate properly around it when it turned.
        </p>
        <Link to='/dashboard'>
          <button>Back to home page</button>
        </Link>
      </div>
      <div className='contentBlock'>
        <h3>Other Projects</h3>
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
                <img src={cutepic} alt='andyoushallreceive' />
                <h2>And you shall recieve</h2>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ComeFlyWithMe
