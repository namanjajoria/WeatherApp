import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import API from './API.css'
import Cart from './Cart'
export default function Axios(){
    const [data,setData]=useState([]);
    const [bool,setBool]=useState(true);
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useState([])

    console.log(cart)
    const a=()=>{
        setLoading(true)
        const url="https://641d322b1a68dc9e4618d8d4.mockapi.io/naman";
        axios.get(url)
        .then((res)=>{
            setData(res.data);
            setLoading(false)
        })
    }
    useEffect(()=>{
        a();
    },[])
    
    return(
        <>
        
        <br></br>
            
            {/* {
                loading ? <h1 style={{color:'red'}}>Data Loading </h1> : ''
            } */}
            
        {bool 
        ?
            <div className='d-flex flex-wrap mt-5 justify-content-center fw-bold'>
            {
                   
                data.map((e,i)=>{
                    return <div key={i} className=" rounded-3 box3  me-4 mb-4 pb-3 col-sm-12 col-md-3">
                        <center><img src={e.Producturl} width="350px" height="300px"></img></center><br></br>
                        <p>Name: {e.Productname}</p>
                        <p>Price: {e.Price}</p>
                        <p>Description: {e.Description}</p>
                        <button type={'button'} className='btn btn-success' onClick={()=>setCart(p=>[...p, e])}>Add to Cart</button>
                        </div>
                })
            }
            </div>
            :
            <Cart/>
        }
        
        </>
    )
}