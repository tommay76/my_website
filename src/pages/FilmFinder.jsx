import { React, useEffect } from 'react';
import { Link } from 'react-router-dom'
import homePage from '../images/projects/filmFinerHomePage.png';

function FilmFinder() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='constellationsBody'>
      <h1>Constellations</h1>
      <div className='constellationsBanner' />
      <div className='contentBlock'>
        <h3>Written in: JavaScript ( React )</h3>
        <p>
          My cool website that you're currently exploring. Written in React, CSS
          and a little bit of Material UI sprinkled in.
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
  );
}
