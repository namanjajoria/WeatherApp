import React from 'react'
import File1 from './File1'
import { useState } from 'react';
function File2({wow}) {
    const [bool,setBool]=useState(true);
    const handleClick=()=>{
        setBool(!bool);
    }
  return (
    <>
    {
        bool
        ?
        <div className='ps-5 fs-2'>
        Name:{wow.Name}<br></br>
        Age:{wow.Age}<br></br>
        Email:{wow.Email}<br></br>
        Password:{wow.Password}<br></br><br></br>
        <button type={'button'} className='btn btn-primary' onClick={handleClick}>Go Back</button>
        </div>
        :
        <File1/>
    }
    </>
  )
}

export default File2
