import React from 'react';
import List from './List';
import { useState } from 'react';
function Home() {
    const [array,setArray]=useState([1,2,3,4]);
    const [num,setNum]=useState(0);
  return (
    <div>
    <h2>Number:{num}</h2>
      <button type={'button'} className="btn btn-primary" onClick={()=>setArray([array[1],array[2],array[3],array[3]+1])}>Add Items</button>
      <button type={'button'} className="btn btn-success" onClick={()=>setNum(num+1)}>Increment</button>
      
      <List data={array}></List>

    </div>
  )
}
export default Home
