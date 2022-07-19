import React from 'react'

function Input({ inputLabel, inputid, handleInput,value}) {

    return (
        <>
            <label for={inputid}>{inputLabel}</label>
            <input type='number' value={value} id={inputid} onChange={(e)=> {handleInput(e.target.value)} } />
        </>
    )
}

export default Input