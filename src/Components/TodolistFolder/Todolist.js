import React, { useState } from "react";
import "./One.css";
function Todolist() {
    const [data,setData]=useState('');
    const [array,setArray]=useState([]);
    const handleClick=()=>{
        setArray((pre)=>{
            return [...pre,data];
        })
        setData('');
    }
    const handleDelete=(i)=>{
        array.splice(i,1);
        setArray([...array]);
    }
    const handleClear=()=>{
        setArray([]);
    }
    
    const handleUpdate=(i)=>{
        array.splice(i,1,data);
        setArray([...array]);
        setData('');
    }
  return (
    <div>
      <div className="row box pb-4">
        <div className="row d-flex">
          <div className="col-sm-12 col-md-4"></div>
          <div className="col-sm-12 col-md-4 bg-light mt-5 box1">
            <center className="mt-4 center">
              <h1>ToDo list</h1>
            </center>
            <div className="d-flex pb-4">
              <input type="text" className="ms-4 mt-5 inputbox" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Add Items"></input>
              <button type={"button"} className="ps-3 pe-3 button1" onClick={handleClick}><h1 className="text-light">+</h1></button>
            </div>
            <div className=" mt-2 box2">
              {
                array.map((e,i)=>{
                return <ul className="ps-4 pe-4">
                        <h3 className="d-flex row h3 pt-2 pb-2 border border-danger border-2">
                        <div className="d-flex col-md-7 col-6 col-sm-6">
                        <li className="li fw-bolder ms-3">{e}</li>
                        </div>
                        <div className="d-flex ms-2 col-md-4 col-5 col-sm-5">
                        <button className="btn btn-danger button2 ps-3 pe-3" onClick={()=>handleDelete(i)}><i class="fa-regular fa-trash-can"></i></button>
                        <button type={'button'} className="btn btn-success" onClick={()=>handleUpdate(i)}><i class="fa-regular fa-pen-to-square"></i></button>
                        </div>
                        <div className="col-md-3"></div>
                        </h3>
                    </ul>
                })
              }
              <center><button type={'button'} className="btn btn-warning mt-3" onClick={handleClear} >Clear All</button></center>
            </div>
          </div>
          <div className="col-sm-12 col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
