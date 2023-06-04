import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from './User';
import Navbar from './Navbar'
import Cart from './Cart'
export default function Main(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar/>}>
                        <Route index={true} element={<User/>}></Route>
                        <Route path='Cart' element={<Cart/>}></Route>
                    </Route> 
                </Routes>
            </BrowserRouter>
        </>
    )
}

