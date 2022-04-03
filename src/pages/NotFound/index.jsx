import React from 'react'
import NavBar from '../../components/Navbar'
import notFound from '../../assets/images/notfound.png'

const NotFound = () => {

  const imgStyle = {
    width: '40%',
    height: '40%',
    marginTop: '60px'
  }

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (

    <div>
      <NavBar />
      <div style={wrapperStyle}>
        <img src={notFound} alt='NotFound' style={imgStyle}/>
      </div>
    </div>

  )
}

export default NotFound