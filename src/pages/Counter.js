import React from 'react';
import { useReducer } from 'react';

const Counter = () => {
    const initialState = 0 ;
    const reducer =(state, action)=>{
      if(action.type === "DECREMENT"){
         return state - action.payload.count;
      }
      else if(action.type === "INCREMENT"){
        return state + action.payload.count;
      }
    }
    
    const [state, dispatch]=useReducer(reducer, initialState)

    


    return (
        <div className='text-center border w-1/2 mt-80 mx-auto mt-1/2'>
             <div className='p-10'>
             <div>
                <h1 className='text-xl'>{state}</h1>
             </div>
             <div>
                <button className='btn mr-5 '
                onClick={()=> dispatch({type : "DECREMENT", payload : {count : 325}})}
                >
                    Decrement
                </button>
                <button className='btn'
                onClick={()=> dispatch({type: "INCREMENT", payload: {count: 5}})}
                >
                    Increment
                </button>
             </div>
             </div>
        </div>
    );
};

export default Counter;