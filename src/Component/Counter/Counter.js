import React,{useState} from 'react';
import './Counter.css';


 export default function Counter(){
    const initialState = 0
    const [counter,  setCounter] = React.useState(initialState)

    console.log("counter",counter)

    const handleIncrement = ()=>{
        // add state value by 1
        setCounter(counter +1 )
    }

    const handleDecremeant = ()=>{
      //reduce state value by 1
      setCounter(counter - 1)
    }

    const handleAsyncIncrement = ()=>{
        console.log("counter value in asyncIncrement",counter)
        setTimeout(()=>{
            console.log("hellloooo")
        //  setCounter(counter + 1)

        setCounter((prevState)=> prevState + 1)
        },4000)
    }
    return(
    <React.Fragment>
       <div className='counter-container'>
       <h1 className='counter-value'>I am counter: {counter} </h1>

       <div className='action-buttons'>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecremeant}>Decrement</button>
        <button onClick={handleAsyncIncrement}>AsyncIncrement</button>
       </div>
       </div>
    </React.Fragment>
    )
}
