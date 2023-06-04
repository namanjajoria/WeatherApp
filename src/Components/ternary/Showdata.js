import React, { useState } from "react";
import Getdata from './Getdata'
export default function A({data}){
   const [bool,setBool]=useState(true);
    return(
        <>
        {
            bool
            ?
            <div>
                <span className="ms-5">Name:</span> {data.Name}<br></br><br></br>
                <span className="ms-5">Email:</span> {data.Email}<br></br><br></br>
                <span className="ms-5">Password:</span> {data.Password}<br></br><br></br>
                <span className="ms-5">Mobile No.</span> {data.Mobile}<br></br><br></br>
                <button type={'button'} onClick={()=>setBool(false)} className="ms-5 btn btn-danger">Go Back</button>
            </div>
            :
            <Getdata/>
        }
        </>
    )    
}
