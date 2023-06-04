import React from "react";
import './Name.css';
import Login from './Login'
import { useState } from "react";
import Signup from './Signup';
export default function First(){
    const [bool,setBool]=useState(true);
    const [blue,setBlue]=useState(true);
    const handleClick=(type)=>{
        if(type=='login'){
            setBlue(true);
        }
        else if(type=='signup'){
            setBlue(false);
        }
        setBool(!bool);
    }
    return(

        <>
            {
                bool
                ?
            <div className="d-flex row mt-5 pt-5">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4 d-flex border border-primary border-3 box mt-5 align-items-center flex-column pt-3">
                    <div className="box1">
                    
                    </div>
                   <button type={'button'} onClick={()=>handleClick('login')} className='btn btn-primary  mt-5 pt-2 pb-2 ps-5 rounded-pill pe-5' >Login</button>
                   <button type={'button'} onClick={()=>handleClick('signup')} className='btn btn-primary  mt-4 pt-2 pb-2 ps-5 rounded-pill pe-5'>Sign Up</button>
                </div>
                <div className="col-sm-12 col-md-4"></div>
            </div>
            :
            blue ? <Login/> : <Signup/>
            }
        </>
    )
}
