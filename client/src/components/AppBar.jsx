import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AppBar.css'

function AppBar () {
  return (
    <div className='appBar'>
      <Link to='/dashboard' className='appBarButton' style={{ color: 'black' }}>
        <h2>Home</h2>
      </Link>
      <Link to='/contact' className='appBarButton' style={{ color: 'black' }}>
        <h2> Contact </h2>
      </Link>
    </div>
  )
}

export default AppBar
