import React, { useEffect } from 'react'
import { useState} from 'react'
import './Weather.css';
export default function Weather(){
    const [time,setTime]=useState(null);
    const [date,setDate]=useState(null);
    const [data,setData]=useState(null);
    const [city,setCity]=useState('Chandigarh');
    const [data1,setData1]=useState(null);
    const [data2,setData2]=useState(null);
    // const [country,setCountry]=useState(null);
        const Times=()=>{
            setTimeout(() => {
                const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
                const Month=["January","February","March","April","May","June","July","August","September","October","November","December"];
                const a=new Date();
                const hour=a.getHours();
                const minute=a.getMinutes();
                const second=a.getSeconds();
                const fulltime=`${hour}:${minute}:${second}`;
                const day=a.getDay();
                const date1=a.getDate();
                const month=a.getMonth();
                const year=a.getFullYear();
                const fulldate=`${days[day]}, ${date1} ${Month[month]} ${year}`;
                setTime(fulltime);
                setDate(fulldate);
            },1000);
        }
        Times();   
       
       
        useEffect(()=>{
            const fetchApi=async()=>{
                const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c8e0bf743203706fb1673fb8e1c7d7b`;
                const response=await fetch(url);
                const resjson=await response.json();
                console.log(resjson);
                setData(resjson.main);
                setData1(resjson.visibility);
                setData2(resjson.wind);
               
                // setCountry(resjson.sys);
            }  
            fetchApi();
        },[city])
        
            return(
                <div>
                    <div className='row box2 pt-4'>
                        <div className='col-sm-12 col-md-2'></div>
                        <div className='col-sm-12 col-md-7 mt-5 box3'>
                        <div className='row'>
                            <div className='col-6 col-md-7 box1 m-0 d-flex text-light'>
                                <h2 className='me-2 mt-2'>{city}</h2>
                                {!data 
                                ? <div></div> :
                                <h1 className='h1 me-2 flex-wrap'>{data.temp}<sup>o</sup>C</h1>
                                }
                                <div className='time ms-2'>
                                    <h4>{time}</h4>
                                    <h5>{date}</h5>
                                </div>
                            </div>
                            <div className='col-6 col-md-5  box4 text-light'>
                            
                                {/* <div className='line w-100 mb-4'></div> */}
        
                                <div className='wow d-flex'>
                                    <input type='search' placeholder='Search any city' className='input' onChange={(event)=>{setCity(event.target.value)}}></input>
                               
                                </div>
        
                                <div className='line1 mb-2'></div>
                                       {!data 
                                       ? <p className='text-center'>No data found</p>
                                       :<div>
                                    <p className='mt-4 text-center'>{city}</p>
                                <div className='line2'></div>
        
                                <div className='d-flex w-100 mt-3 box5'>   
                                    <p className='fs-6'>Temprature</p>
                                    <p>{data.temp}<sup>o</sup>C</p>
                                </div>
                                <div className='line2'></div>
        
                                <div className='d-flex w-100 mt-3 box5'>
                                    <p className='fs-6'>Humidity</p>
                                    <p>{data.humidity}%</p>
                                </div>
                                <div className='line2'></div>
        
                                <div className='d-flex w-100 mt-3 box5'>
                                    <p className='fs-6'>Visibility</p>
                                    <p>{data1}m</p>
                                </div>
                                <div className='line2'></div>
        
                                <div className='d-flex w-100 mt-3 box5'>
                                    <p className='fs-6'>Wind Speed</p>
                                    <p>{data2.speed} m/s</p>
                                </div>
                                </div>
                              
                                }
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-3'></div>
                    </div>
                </div>
            )
        }
    