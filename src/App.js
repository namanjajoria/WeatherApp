// import './App.css';
// import Card from './Components/Card';
// import image from './Components/image/win.gif';
// import image1 from './Components/image/black.jpeg';

// export default function Tom(){
//   return(
//     <>
//     <div className='d-flex'>
//       <Card title={'SPIDERMAN'} description={'I AM BIG FAN OF SPIDERMAN'} image={image}/>
//       <Card title={'SPIDERMAN'} description={'I AM BIG FAN OF SPIDERMAN'} image={image}/>
//       <Card title={'SPIDERMAN'} description={'I AM BIG FAN OF SPIDERMAN'} image={image}/>
//       <Card title={'SPIDERMAN'} description={'I AM BIG FAN OF SPIDERMAN'} image={image}/>
//       <Card title={'SPIDERMAN'} description={'I AM BIG FAN OF SPIDERMAN'} image={image}/>
//     </div>
    
//     <div className='d-flex'>
//       <Card title={'BLACK PANTHER'} description={'I AM BIG FAN OF BLACK PANTHER'} image={image1}/>
//       <Card title={'BLACK PANTHER'} description={'I AM BIG FAN OF BLACK PANTHER'} image={image1}/>
//       <Card title={'BLACK PANTHER'} description={'I AM BIG FAN OF BLACK PANTHER'} image={image1}/>
//       <Card title={'BLACK PANTHER'} description={'I AM BIG FAN OF BLACK PANTHER'} image={image1}/>
//       <Card title={'BLACK PANTHER'} description={'I AM BIG FAN OF BLACK PANTHER'} image={image1}/>
//     </div>
//     </>
//   )
// }


// // import React from 'react';
// // import { useState } from 'react';
 
// // export default function App(){
// //   const[name,setName]=useState("");
// //   const[num,setNum]=useState(0);
// //   let array=["SPIDERMAN","IRON MAN","BLACK PANTHER","THOR","LOKI"];

// //   let handleClick=()=>{
// //     setName(array[num]);
// //     setNum((num)=>num+1);
// //   }
// //   return(
// //     <>
// //       <h1>{name}</h1>
// //       <button type={'button'} onClick={handleClick}>Click Me</button>
// //     </>
// //   )
// // }

// // import { useEffect, useState } from 'react';

// // export default function App()
// // {
// //   const [timer,setTimer] = useState(0);
// //   const [bool,setBool] = useState(false);
// //   const [start,setStart] = useState('start');

// //   useEffect(()=>{
// //     if(bool==true)
// //     {
// //       setTimeout(()=>{
// //         setTimer(timer + 1);
// //       },10);
// //     }
// //     else{
// //    clearTimeout();   
// //     } 
// //   })

// //   const handleClick = ()=>{
// //     if(bool==false)
// //     {
// //       setBool(true);
// //       setStart('stop');
// //     }
// //     else
// //     {
// //       setBool(false);
// //       setStart('start');
     
// //     }
// //   }

// //   return(
// //     <>
// //       <h1>{timer}</h1>
// //       <button onClick={handleClick}>{start}</button>
// //     </>
// //   )
// // }



// // import React from 'react';
// // import { useEffect,useState} from 'react';
// // export default function App(){

// //   const [timer,setTimer]=useState(0);
// //   const [bool,setBool]=useState(false);
// //   const[start,setStart]=useState('start');

// //   useEffect(()=>{
// //     if(bool==true){
// //       setTimeout(() => {
// //         setTimer(timer+1);
// //       },10);
// //     }
// //     else{
// //       clearTimeout();
// //     }
// //   })

// //   const handleClick=()=>{
// //     if(bool==false){
// //       setBool(true);
// //       setStart('stop');
// //     }
// //     else{
// //       setBool(false);
// //       setStart('start');
// //     }
// //   }

// //   return(
// //     <>
// //       <h1>{timer}</h1>
// //       <button onClick={handleClick}>{start}</button>
// //     </>
// //   )
// // }


// import React from 'react';
// import { useState,useEffect} from 'react';

// export default function App(){

//   const [mili,setMili]=useState(0);
//   const[sec,setSec]=useState(0);
//   const[min,setMin]=useState(0);
//   const[hour,setHour]=useState(0);
//   const[bool,setBool]=useState(false);

//   useEffect(()=>{
//     if(bool==true){
//       if(mili=1000){
//       setTimeout(() => {
//         setMili(0);
//         setSec(sec+1);
//       },);
//       }
//       if(sec==60){
//         setTimeout(() => {
//           setSec(0);
//           setMin(min+1);
//         },);
//       }
//       if(min==60){
//         setTimeout(() => {
//           setMin(0);
//           sethour(hour+1);
//         },);
//       }
//       mili++;
//       document.getElementById('h1').innerHTML=`${hour} : ${min} : ${sec} : ${mili}`;
//     }
//   })

//   handleStart(()=>{
//     if(bool=false){
//       setBool(true)
//     }
//   })
//   return(
//     <>
//       <h1 id={h1}></h1>
//       <buttton type={'button'} onclick={handleStart}>Start</buttton>
//       <button type={'button'} onclick={handleStop}>Stop</button>
//       <button type={'button'} onclick={handleReset}>Reset</button>
//       <button type={'button'} onclick={handleLapse}>Lapse</button>
//     </>
//   )
// }
// import React from 'react';
// import {useState,useEffect} from 'react';
// export default function App()
// {

//   const [data,setData] = useState({hour:0,min:0,sec:0,mili:0});
//   const [bool,setBool] = useState(false);
//   // const [bool1,setBool1] = useState(false);

//   useEffect(()=>{
//     if(bool==true)
//     {
//       setTimeout(()=>{
//        if(data.mili < 100)
//        {
//           setData((pre)=>{
//             return {...pre,mili: pre.mili + 1}
//           })
//        }
//        else if(data.sec < 60)
//        {
//           setData((pre)=>{
//             return {...pre,sec: pre.sec + 1,mili:0}
//           })
//        }
//        else if(data.min < 60)
//        {
//           setData((pre)=>{
//             return {...pre,min: pre.min + 1,sec:0}
//           })
//        }
//        else if(data.hour < 60)
//        {
//           setData((pre)=>{
//             return {...pre,hour: pre.hour + 1,min:0}
//           })
//        }
//       },10)
//     }
//     else{
//       return()=>clearTimeout();
//     }
//   })

//   const handleClick = ()=>{
//     if(bool)
//     setBool(false);
//     else
//     setBool(true);
//   }

//   handleLapse(()=>{
//     document.getElementById("p").innerHTML+=``;
//   })
//   return(
//     <>
//       <h1>{data.hour}:{data.min}:{data.sec}.{data.mili}</h1>
//       <button onClick={handleClick}>{bool ? "Stop" : 'Start'}</button>
//       <button type={'button'} onClick={handleLapse} className='btn btn-success'>Lapse</button>
//     </>
//   )
// }

// import React from "react";
// import { useState } from "react";
// export default function App(){
//   const[data,setData] = useState();
//   const[num,setNum] = useState(0);
//   const[array,setArray] = useState(['red','blue','pink','green','maroon','salmon','yellow']);
//   const handleClick=()=>{
//     if(num===array.length - 1){
//       setData(array[num]);
//       setNum(0);
//     }else if(num<=6){
//       setData(array[num]);
//       setNum((value)=>value+1)
     
//     }else{
//       array([])
//     }
//   }
//   return(
//     <>
//       <h1 style={{color:array[num-1]}}>{data}</h1>
//       <button onClick={handleClick}>Click On Me</button>
//     </>
//   )
// }



// import React, { useState } from 'react';
// import './App.css';

// export default function App() {

//     const [left,setLeft] = useState(-2000);

//     const handleClick = ()=>{
//         if(left === -2000)
//         setLeft(0);
//         else
//         setLeft(-2000);
//     }

//   return (
//     <>
//         <button onClick={handleClick}>click</button>
//         <p style={{left: `${left}px`,position:'relative',transition:'2s'}}>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
//     </>
//   )
// }

// import React from 'react';
// import { useState,useEffect,useRef } from 'react';

// export default function App() {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);
  
//     useEffect(() => {

//       count.current = count.current + 1;
//     });
  
//     return (
//       <>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <h1>Render Count: {count.current}</h1>
//       </>
//     );
// }

// import React, { useState } from 'react'

// export default function App() {
//     const [val,setVal] = useState({name:'',email:''});

//     const handleChange = (e,type
//         )=>{
//         if(type === 'n')
//         setVal((pre)=>{
//             return {...pre,name:e.target.value};
//         });
//         else if(type === 'e')
//         {
//             setVal((pre)=>{
//                 return {...pre,email:e.target.value};
//             });
//         }
//     }

//     const handleClick = ()=>{
//         if(val !== '')
//         alert(`${val.name} ${val.email}`)
//     }

//   return (
//     <>
//         <input type={'text'} placeholder='enter name' value={val.name} onChange={(e)=>{handleChange(e,'n')}}></input>
//         <input type={'email'} placeholder='enter email' value={val.email} onChange={(e)=>{handleChange(e,'e')}}></input>
//         <button onClick={handleClick}>click</button>
//     </>
//   )
// }


// 15March,2023;

// import React from "react";
// import { useState } from "react";
// import Getdata from './Components/ternary/Getdata';
// // import First from './Components/LoginForm/First';
// import Signup from './Components/LoginForm/Signup';
//  // import Login from './Components/LoginForm/Login';
// import Time from './Components/UseEffectExample/Time';
// import Typewriter from 'typewriter-effect';
// import StopWatch from './Components/UseEffectExample/Stopwatch';
// import Todolist from './Components/Todolist';
// import Button from './Components/Button';
// import First from './Components/RoutsExample/First'
// import Axios from './Components/APIexample/Axios';
// import One from './Components/UseRef example/One'
// import Home from './Components/Memoexample/Home'
// import Reducer from './Components/Usereducer example/Reducer'
// import User from './Components/APIexample/User'
// import Main from './Components/APIexample/Main'
// import File1 from './Components/Props example/File1'
// import File3 from "./Components/Props example/File3";
// export default function App(){
//   const [data,setData]=useState({image:'https://wallpapers.com/images/featured/p4ashmgeamn2mvkn.jpg',Cardtitle:'Ultimate Spiderman', CardText:'“With great power comes great responsibility.” — Spider-Man.',link:'https://www.marvel.com/movies'});
//   return(
//     <>
//     <div className="d-flex ">
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//     </div>
//     <div className="d-flex ">
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//     </div>
//     <div className="d-flex ">
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//       <File3 data={data}/>
//     </div>
// </>
//   )
 
  // import React, { createContext } from 'react';
// import Comp1 from './Components/UseContext example/Comp1';
// export const a=createContext();
// export default function App(){
//     const b={name:"NAMAN JAJORIA", email:"namanjajoria@gmail.com", age:21}
//     return(
//         <>
//             <a.Provider value={b}>
//                 <Comp1/>
//             </a.Provider>
//         </>
//     )
// }



// import React from 'react'
// // import Axios from './Components/APIexample/Axios'
// import Main from './Components/APIexample/Main'
// // import Todolist from './Components/Todolist Folder/Todolist'
// // import Main from './Components/APIexample/Main'
// // import Boot1 from './Components/Boot Folder/Boot1'
// function App() {
//   return (
//     <div>
//       <Main/>
//       {/* <Todolist/> */}
//       {/* <Boot1/> */}
//       {/* <Axios/> */}
//     </div>
//   )
// }

// export default App
import React from 'react'
// import Main from './Components/APIexample/Main'
// import Reducer from './Components/Usereducer example/Reducer'
// import Navbar from './Components/Props1/Navbar'
import Todolist from './Components/TodolistFolder/Todolist'
// import Weather from './Components/WeatherApp/Weather';
// import File1 from './Components/Props example/File1';
function App() {
  return (
    <>
      {/* <Main/> */}
      {/* <Reducer/> */}
      {/* <Navbar title="State Bank of India" home="Home" about="About" contact="Contact"/> */}
      <Todolist/>
      {/* <Weather/> */}
      {/* <File1/> */}

      
    </>
  )
}
export default App
