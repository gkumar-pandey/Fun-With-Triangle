import React from 'react'

function Button({handleButton}) {
  return (
    <>
      <button onClick={handleButton}>Submit</button>
    </>
  )
}

export default Button