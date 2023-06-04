// UseRef Example:-

import React from "react";
import { useState,useEffect,useRef } from "react";
export default function One(){
  const [data,setData]=useState('');
  const count=useRef('');
  useEffect(()=>{
    count.current=data;
  })
  return(
    <>
      <h4>{`Value: ${data}, Count:${count.current}`}</h4>
      <span>Name:&nbsp;</span>
      <input type={'text'} value={data} placeholder="Enter Name" onChange={(e)=>setData(e.target.value)}></input>
    </>
  )
}


// import React from 'react';
// import { useState, useRef } from 'react';
// export default function One(){
//   const [data,setData]=useState('');
//   const ref1=useRef('');
//   const ref2=useRef('');
//   return(
//     <>
//       <span>Username:&nbsp;</span>
//       <input type={'text'} ref={ref1} value={data} placeholder='Enter Username' onChange={(e)=>setData(e.target.value)}></input>&nbsp;
//       <button type={'button'} className='btn btn-primary' onClick={()=>ref1.current.focus()}>Focus Me</button>
//       <br></br><br></br>
//       <span>Password:&nbsp;</span>
//       <input type={'password'} ref={ref2} value={data} placeholder='Enter Password' onChange={(e)=>setData(e.target.value)}></input>&nbsp;
//       <button type={'button'} className='btn btn-primary' onClick={()=>ref2.current.focus()}>Focus Me</button>
//     </>
//   )
// }








