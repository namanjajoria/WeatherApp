import React from 'react';
import { useState,useEffect } from 'react';
export default function Time(){
    const [time,setTime]=useState(0);
    const [bool,setBool]=useState(false);
    let a;
    useEffect(()=>{
        if(bool){
           a=setTimeout(() => {
                setTime(time+1);
            },10);
        }
        return ()=> clearTimeout(a);
    })
    const handleClick=()=>{
        if(bool){
            setBool(false);
        }
        else{
            setBool(true);
        }
    }
    return(
        <>
            <h1>Time:{time}</h1>
            <button type={'button'} className='btn btn-primary' onClick={handleClick}>{bool ? "Stop" : "Start"}</button>
        </>
    )
}