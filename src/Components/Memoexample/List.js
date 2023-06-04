import React from 'react'
import {memo} from 'react'
function List({data}) {
    console.log('hiii');
  return (
    <div>
      <h1>{data.map((e,i)=>{return <div key={i}>{e}</div>})}</h1>
    </div>
  )
}
export default memo(List);
