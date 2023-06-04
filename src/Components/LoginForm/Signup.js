import React from "react";
import { useState } from "react";
import './Name.css';
export default function Sign(){
    const handleClick=()=>{
        alert("You have successfully SignUp.");
    }   
    return(
        <>
            <div className="row d-flex good bg-primary pt-3">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4 box4 border-3 bg-light pt-4">
                    <div className="col-sm-12 col-md-12  m-0 pt-2 pb-2">
                        <center><h2 className="">Sign Up</h2></center>
                    </div>
                    <div className="container box5 mt-3 pt-1">
                        <h5>First Name:</h5>
                        <input type={'text'} placeholder='enter first name'></input><br></br><br></br>
                        <h5>Last Name:</h5>
                        <input type={'text'} placeholder='enter last name'></input><br></br><br></br>
                        <h5>UserName:</h5>
                        <input type={'text'} placeholder='enter username'></input><br></br><br></br>
                        <h5>Password:</h5>
                        <input type={'password'} placeholder='enter password'></input>
                        
                    </div>
                        <center><button type={'button'} className='btn btn-primary  mt-2 pt-2 pb-2 ps-5 rounded-pill pe-5 newbutton' onClick={handleClick}>Sign Up</button></center>
                </div>
                <div className="col-sm-12 col-md-4"></div>

            </div>
        </>

    )
}