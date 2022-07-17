import React from 'react'

function Button({handleButton}) {
  return (
    <div>
      <button onClick={handleButton}>Submit</button>
    </div>
  )
}

export default Button