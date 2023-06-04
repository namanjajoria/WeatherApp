import React, { useState } from 'react'
import Button from './Button';
function File1() {
    const [data,setData]=useState(true);
  return (
    <>
    {
        data
        ?
        <div>
      <h1>TODAY IS THURSDAY</h1>
      <button type={'button'} className="btn btn-success" onClick={()=>setData(false)}>Go Back</button>
      </div>
      :
      <Button/>
    }
    </>
  )
}

export default File1
