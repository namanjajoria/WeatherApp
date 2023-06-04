import React, { useContext } from 'react';
import {a} from '../../App';
function Comp3() {
    const c=useContext(a);
  return (
    <div>
        <font color="blue">{`Name:${c.name},  Age:${c.age},  Email:${c.email}`}</font>
    </div>
  )
}

export default Comp3;
