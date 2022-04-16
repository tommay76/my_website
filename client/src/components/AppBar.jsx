import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AppBar.css'

function AppBar () {
  const backToTop = () => {
    if (window.location.pathname === '/dashboard') window.scrollTo(0,0);
  }
  return (
    <div className='appBar'>
      {(window.location.pathname === '/dashboard') &&
        <Link to='/dashboard' className='appBarButton' style={{ color: 'black' }} onClick={backToTop} >
          <h2>Home</h2>
        </Link>
      }
      {(window.location.pathname !== '/dashboard') &&
        <Link to='/dashboard' className='appBarButton' style={{ color: 'black' }} >
          <h2>Home</h2>
        </Link>
      }
      <Link to='/contact' className='appBarButton' style={{ color: 'black' }}>
      {/* <i className="fa-regular fa-comment-dots" size='xl'/> */}
        <h2> Contact </h2>
        
      </Link>
    </div>
  )
}

export default AppBar
