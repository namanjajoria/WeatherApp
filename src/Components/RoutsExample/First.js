import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navigation from './Navigation';
import Stopwatch from '../UseEffectExample/Stopwatch'
import Axios from '../APIexample/Axios';
import Todolist from "../Todolist";
export default function First(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route path='home' element={<Stopwatch/>}></Route>
            <Route path='about' element={<Axios/>}></Route>
            <Route path='contact' element={<Todolist/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}