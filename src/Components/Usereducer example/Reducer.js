import React from 'react';
import { useReducer } from 'react';
function Reducer() {
    const reducer=(state,action)=>{
        if(action.type==='++'){
            return state+1;
        }
        else if(action.type==='--'){
            if(state<=0){
                return 0;
            }
            else{
            return state-1;
            }
        }
        else if(action.type==='ibv'){
            return state+action.payload;
        }
        else{
            return state;
        }
    }
    const [num,dispatch]=useReducer(reducer,0);
  return (
    <div className='row'>
        <h1 className='text-primary text-center mt-3'>USEREDUCER EXAMPLE</h1>
        <hr></hr><br></br><br></br>
      <div className='col-sm-12 col-md-4'></div>
      <div className='col-sm-12 col-md-4  border border-danger border-3 pt-5 pb-5 '>
      <h3 className='text-center'>Value:{num}</h3><br></br>
        <div className='d-flex justify-content-center'>
        <button type={'button'} className='btn btn-success me-3' onClick={()=>dispatch({type:'++'})}>Increment</button>
        <button type={'button'} className='btn btn-danger me-3' onClick={()=>dispatch({type:'--'})}>Decrement</button>
        <button type={'button'} className='btn btn-primary' onClick={()=>dispatch({type:'ibv',payload:30})}>Increment by value</button>
        </div>
      </div>
      <div className='col-sm-12 col-md-4'></div>
    </div>
  )
}

export default Reducer

