import React from 'react';
import { useState,useEffect } from 'react';
export default function Todolist(){
    const [data,setData]=useState([]);
    const [title,setTitle]=useState('');
    const [des,setDes]=useState('');
    const [bool,setBool]=useState(true);
    const handleClear=()=>{
        setData([]);
    }
    const handleClick = () =>{
        setData((gucci)=>{
          return ([...gucci, {title, des}]);
        })
    }
    const handleDelete=(index)=>{
        data.splice(index,1);
        setData([...data]);
    }
    const handleClicks=()=>{
        
    }
    return(
        <>
            <span className='ms-5'>Title:</span>
            <input type={'text'} placeholder='enter title' onChange={(e)=>setTitle(e.target.value)}></input><br></br>
            <span className="ms-5">Description:</span>
            <input type={'text'} placeholder='enter description' onChange={(e)=>setDes(e.target.value)}></input><br></br>
            <button type={'button'} onClick={handleClick} className='btn btn-primary ms-5'>Add Item</button>
            <button type={'button'} onClick={handleClear} className="btn btn-success">Clear Item</button>
            {
            
                data.map((value,index)=>{
                    return <div key={index}>
                    <h1>Title : {value.title}</h1>
                    <h1>Des : {value.des}</h1>
            <button className="btn btn-danger" type={'button'} onClick={handleDelete}>Delete</button>
            <button type={'button'} className="btn btn-warning" onClick={handleClicks}>Edit</button>
                    </div>
                })
            }
        </>
    )
}