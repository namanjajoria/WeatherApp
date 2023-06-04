import React from "react";
import { useState } from "react";
import './Name.css';
export default function Login(){
    const[data,setData]=useState({Username:'',Password:''});
    const[error,setError]=useState('');
    const email=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const handleClick=()=>{
       if(!email.test(data.Username)){
        setError("Please enter valid Username");
        }
        else if(data.Password.length<8){
            setError("Please enter valid Password");
        }
        else{
            setError('');
            alert("You have successfully login");
        }
    }
    const handleChange=(e,type)=>{
        if(type==='t'){
            setData((pre)=>{
                return{...pre,Username:e.target.value};
            })
        }
        else if(type==='p'){
            setData((pre)=>{
                return{...pre,Password:e.target.value};
            })

        }
    }
    return(
            <form>
            <div className="row d-flex mt-5">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4 box2 border-3 rounded-2 border border-success p-0 mt-5">
                    <div className="col-sm-12 col-md-12 bg-success m-0 pt-2 pb-2">
                        <center><h2 className="text-light">LOGIN FORM</h2></center>
                    </div>
                    <div className="container box3 mt-5 pt-1">
                        <span><h5>UserName:</h5></span>
                        <input type={'email'} value={data.Username} onChange={(e)=>handleChange(e,'t')} placeholder='enter username'></input><br></br><br></br>
                        <span><h5>Password:</h5></span>
                        <input type={'password'} value={data.Password} onChange={(e)=>handleChange(e,'p')} placeholder='enter password'></input>
                        <p className="text-danger">{error}</p>
                        <center><button type={'button'} className='btn btn-success  mt-5 pt-2 pb-2 ps-5 rounded-pill pe-5 newbutton' onClick={handleClick}>Login</button></center>
                        
                    </div>
                </div>
                <div className="col-sm-12 col-md-4"></div>

            </div>
           </form>
    )
}