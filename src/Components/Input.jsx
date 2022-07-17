import React from 'react'

function Input({ inputLabel, inputid, handleInput,value}) {

    return (
        <div>
            <label for={inputid}>{inputLabel}</label>
            <input type='number' value={value} id={inputid} onChange={(e)=> {handleInput(e.target.value)} } />
        </div>
    )
}

export default Input