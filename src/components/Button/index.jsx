import React from 'react'
import './button.css'

const Button = ({BtnText, fontSize, type, BtnWidth, handleClick, BtnBg, disabled}) => {

  const BtnStyle = {
    width: `${BtnWidth ? BtnWidth : '215px'}`,
    padding: '10px',
    fontSize: `${fontSize || '14px'}`,
    border: '1px solid silver',
    borderRadius: '5px',
    backgroundColor: `${BtnBg ? BtnBg : 'white'}`,
    fontWeight: 'bold',
    margin: `${type === 'homepage' ? '20px' : null}`,
    cursor: 'pointer',
    color: 'black',
  }


  return (
    <div>
      <button style={BtnStyle} className='btn' onClick={handleClick} disabled={disabled}>
        {BtnText}
      </button>
    </div>
  )
}

export default Button
