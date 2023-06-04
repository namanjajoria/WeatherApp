import React from "react";
import { useState,useEffect } from "react";
export default function StopWatch(){
    const [time,setTime]=useState({milli:0,sec:0,min:0,hour:0});
    const [bool,setBool]=useState(false);
    const [lapse,setLapse]=useState([]);
    let a;
    useEffect(()=>{
        if(bool){
            a=setTimeout(() => {
                if(time.milli<99){
                    setTime((pre)=>{
                        return{...pre,milli:pre.milli+1};
                    })
                }
                else if(time.sec<59){
                    setTime((pre)=>{
                        return{...pre,sec:pre.sec+1,milli:0};
                    })
                }
                else if(time.min<59){
                    setTime((pre)=>{
                        return{...pre,min:pre.min+1,sec:0};
                    })
                }
                else if(time.hour<59){
                    setTime((pre)=>{
                        return{...pre,hour:pre.hour+1,min:0};
                    })
                }
            },10);
        }
        return ()=>clearTimeout(a);
    })
    const handleClick=()=>{
        if(bool){
            setBool(false);
        }
        else{
            setBool(true);
        }
    }
    const handleReset=()=>{
        setBool(false);
        setTime((pre)=>{
            return{...pre,milli:0,sec:0,min:0,hour:0};
        })
    }
    const handleLapse=()=>{
        setLapse((pre)=>{
            return ([...pre,time]);
        })
    }
    const handleClear=()=>{
        setLapse([]);
    }
    return(
        <>
        <center><h1 className="text-danger mt-3">My Dynamic StopWatch</h1></center>
        <hr></hr><br></br><br></br><br></br>
       <div className="row">
        <div className="col-sm-12 col-md-4"></div>
        <div className="col-sm-12 col-md-4 bg-dark text-primary border border-primary border-3 pt-3 pb-3">
            <center><h1>{time.hour} : {time.min} : {time.sec} : {time.milli}</h1>
             <button className="btn btn-primary me-2" onClick={handleClick}>{bool ? "Stop" : "Start"}</button>
             <button className="btn btn-danger me-2" onClick={handleReset}>Reset</button>
             <button className="btn btn-success me-2" onClick={handleLapse}>Lapse</button>
             <button className="btn btn-warning" onClick={handleClear}>ClearLapse</button></center><br></br>
             {
                lapse.map((e,i)=>{
                    return <div key={i}>
                                <center><p>{e.hour} : {e.min} : {e.sec} : {e.milli}</p></center>
                            </div>
                })
             }
        </div>
        <div className="col-sm-12 col-md-4"></div>
       </div>
       </>
    )
}