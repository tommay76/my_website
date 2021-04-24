import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AppBar.css'

function AppBar () {
  return (
    <div className='appBar'>
      <Link to='/dashboard'>
        <button>
          <h2>About</h2>
        </button>
      </Link>
      <Link to='/contact'>
        <button>
          <h2> Contact </h2>
        </button>
      </Link>
    </div>
  )
}

export default AppBar
