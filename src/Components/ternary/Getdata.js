import React from "react";
import Showdata from './Showdata.js';
import { useState } from "react";
export default function Naman(){
    const [data,setData]=useState({Name:'',Email:'',Password:'',Mobile:''});
    const [bool,setBool]=useState(true);
    const handleChange=(e,type)=>{
        if(type==='n'){
            setData((pre)=>{
                return{...pre,Name:e.target.value};
            })
        }
        else if(type==='e'){
            setData((pre)=>{
                return{...pre,Email:e.target.value};
            })
        }
        else if(type==='p'){
            setData((pre)=>{
                return{...pre,Password:e.target.value};
            })
        }
        else if(type==='m'){
            setData((pre)=>{
                return{...pre,Mobile:e.target.value};
            })
        }
    }
    const handleClick=()=>{
        if(data.Name=='' || data.Email=='' || data.Password=='' || data.Mobile==''){
            alert("Please Enter All Fields");
        }
        else{
            setBool(false);
        }
    }
        return(
            <>
            {
            bool 
            ?
                <div>
                    <span className="ms-5">NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input className="ms-5" type={'text'} value={data.Name} onChange={(e)=>handleChange(e,'n')} placeholder='Name'></input><br></br><br></br>
                    <span className="ms-5">EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input className="ms-5" type={'email'} value={data.Email} onChange={(e)=>handleChange(e,'e')} placeholder='Email'></input><br></br><br></br>
                    <span className="ms-5">Password:&nbsp;&nbsp;</span>
                    <input className="ms-5" type={'password'} value={data.Password} onChange={(e)=>handleChange(e,'p')} placeholder='Password'></input><br></br><br></br>
                    <span className="ms-5">Mobile No.</span>
                    <input className="ms-5" type={'number'} value={data.Mobile} onChange={(e)=>handleChange(e,'m')} placeholder='Mobile No.'></input><br></br><br></br>
                    <button type={'button'} onClick={handleClick} className='btn btn-success ms-5'>Submit</button>
                </div>
                :
                <Showdata data={data}/>
            }
            </>
        )
}