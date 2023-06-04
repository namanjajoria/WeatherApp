import React from 'react'
import { useState } from 'react';
import File2 from './File2';
function File1() {
    const [data,setData]=useState({Name:'',Age:'',Email:'',Password:''});
    const [bool,setBool]=useState(true);
    const handleChange=(e,type)=>{
        if(type==='name'){
            setData((pre)=>{
                return{...pre,Name:e.target.value};
            })
        }
        else if(type==='age'){
            setData((pre)=>{
                return{...pre,Age:e.target.value};
            })
        }
        else if(type==='email'){
            setData((pre)=>{
                return{...pre,Email:e.target.value};
            })
        }
        else if(type==='password'){
            setData((pre)=>{
                return{...pre,Password:e.target.value};
            })
        }
    }
    const handleClick=()=>{
        setBool(false);
    }
  return (
    <>
    {   bool
        ?
        <form className='ps-5'action='php'>
            <span>Name:&nbsp;</span>
            <input type={'text'} placeholder='Enter name' value={data.Name} onChange={(e)=>handleChange(e,'name')}></input><br></br><br></br>
            <span>Age:&nbsp;</span>
            <input type={'number'} placeholder="Enter age" value={data.Age} onChange={(e)=>handleChange(e,'age')}></input><br></br><br></br>
            <span>Email:&nbsp;</span>
            <input type={'text'} placeholder='Enter email' value={data.Email} onChange={(e)=>handleChange(e,'email')}></input><br></br><br></br>
            <span>Password:&nbsp;</span>
            <input type={'password'} placeholder='Enter Password' value={data.Password} onChange={(e)=>handleChange(e,'password')}></input><br></br><br></br><br></br>
            <button type={'button'} className='btn btn-success' onClick={handleClick}>Submit</button>
        </form>
        :
        <File2 wow={data}/>
    }
    </>
  )
}

export default File1
