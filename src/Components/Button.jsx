import React from 'react'

function Button({handleButton, btnName}) {
  return (
    <>
      <button onClick={handleButton}>{btnName}</button>
    </>
  )
}

export default Button