import React from 'react'
import './button.css'

const Button = ({BtnText, fontSize, type, BtnWidth}) => {

  const BtnStyle = {
    width: `${BtnWidth ? BtnWidth : '215px'}`,
    padding: '10px',
    fontSize: `${fontSize || '14px'}`,
    border: '1px solid silver',
    borderRadius: '5px',
    background: 'white',
    fontWeight: 'bold',
    margin: `${type === 'homepage' ? '20px' : null}`,
    cursor: 'pointer',
  }


  return (
    <div>
      <button style={BtnStyle} className='btn'>
        {BtnText}
      </button>
    </div>
  )
}

export default Button
