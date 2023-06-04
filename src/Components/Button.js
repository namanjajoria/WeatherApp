import React from 'react'
import { useState } from 'react'
import File1 from './File1';
import File2 from './File2';
import File3 from './File3';
import File4 from './File4';

export default function Button(){
    const [bool,setBool]=useState(true);
    const [data,setData]=useState(true);
    const [mood,setMood]=useState(true);
    const [johnny,setJohnny]=useState(true);
    const handleClick=(type)=>{
        if(type==='one'){
            setBool(false);
            setData(true);
        }
        else if(type==='two'){
            setBool(false);
            setData(false);
        }
        else if(type==='three'){
            setBool(false);
            setMood(false);
        }
        else if(type==='four'){
            setBool(false);
            setJohnny(false);
        }
    }
    return(
        <>{
            bool
            ?
            <div>
            <h1>MY NAME IS NAMAN JAJORIA</h1>
            <button type={'button'} className="btn btn-primary" onClick={()=>handleClick('one')}>Click Me1</button>
            <button type={'button'} className="btn btn-primary" onClick={()=>handleClick('two')}>Click Me2</button>
            <button type={'button'} className="btn btn-primary" onClick={()=>handleClick('three')}>Click Me3</button>
            <button type={'button'} className="btn btn-primary" onClick={()=>handleClick('four')}>Click Me3</button>
            </div>
            :
            data ? mood ? johnny ? <File1/> : <File4/> : <File3/>  : <File2/>
        }
        </>
    )
}