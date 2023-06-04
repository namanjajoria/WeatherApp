import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import API from './API.css'
export default function Axios(){
    const [data,setData]=useState([]);
    const [num,setNum]=useState({Producturl:'',Productname:'',Price:'',Description:''});
    const a=()=>{
        const url="https://641d322b1a68dc9e4618d8d4.mockapi.io/naman";
        axios.get(url)
        .then((res)=>{
            setData(res.data);
        })
    }
    useEffect(()=>{
        a();
    },[]);
    // const handleUpdate=(id)=>{
    //     const url=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman/${id}`;
    //     const b={
    //         avatar:`https://www.enjpg.com/img/2020/kratos-1-e1668713441908.webp`,
    //         name:"Naman Jajoria",
    //         city:"Chandigarh",
    //         country:"INDIA"
    //     }
    //     axios.put(url,b)
    //     .then((res)=>{
    //         a();
    //     })
    // }
    const handleDelete=(id)=>{
        const url=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman/${id}`;
        axios.delete(url)
        .then((res)=>{
            a();
        })
    }
    const handleAdd=()=>{
        const url=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman`;
        axios.post(url,num)
        .then((res)=>{
            a();
        })
        setNum((pre)=>{
            return{...pre,Producturl:'', Productname:'', Price: '', Description: ''};
        })
    }

    const handleProduct=(e,type)=>{
        if(type=='pu'){
            setNum((pre)=>{
                return{...pre, Producturl:e.target.value};
            })
        }
        else if(type=='pn'){
            setNum((pre)=>{
                return{...pre,Productname: e.target.value};
            })
        }
        else if(type=='price'){
            setNum((pre)=>{
                return{...pre, Price:e.target.value};
            })
        }
        else if(type=='des'){
            setNum((pre)=>{
                return{...pre, Description:e.target.value};
            })
        }
    }
    

    return(
        <>
        <center><h1 className='text-danger mt-3 bg-dark'>Admin Panel</h1></center>
        <div className='row'>
        <div className='col-sm-12 col-md-12 box2 pt-3 pb-3 fw-bold'>
        <span className='ms-4'>Product URL:</span>&nbsp;
        <input type={'text'} value={num.Producturl} onChange={(e)=>handleProduct(e,'pu')} placeholder="enter product url" className='box me-3'></input>
        <span>Product Name:</span>&nbsp;
        <input type={'text'} value={num.Productname} onChange={(e)=>handleProduct(e,'pn')} placeholder="enter product name" className='box me-3'></input>
        <span>Price:</span>&nbsp;
        <input type={'text'} value={num.Price} onChange={(e)=>handleProduct(e,'price')} placeholder="enter product price" className='box me-3'></input>
        <span>Description:</span>&nbsp;
        <input type={'text'} value={num.Description} onChange={(e)=>handleProduct(e,'des')} placeholder="enter product description" className='box me-5'></input>
        <button type={'button'} className="btn btn-primary" onClick={handleAdd}>Add Item</button>
        
        </div>
        </div>
        <br></br>

        <div className='d-flex flex-wrap mt-5 justify-content-center fw-bold'>
            {
                data.map((e,i)=>{
                    return <div key={i} className="rounded-3 box3  me-4 mb-4 pb-3 col-sm-12 col-md-3">
                        <center><img src={e.Producturl} width="350px" height="300px"></img></center><br></br>
                        <p>Name: {e.Productname}</p>
                        <p>Price: {e.Price}</p>
                        <p>Description: {e.Description}</p>
                        <button className='btn btn-danger me-2' type={'button'} onClick={()=>handleDelete(e.id)}>Delete</button>
                        </div>
                })
            }
        </div>
        </>
    )
}