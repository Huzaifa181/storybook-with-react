import React from "react";
import Button from './Button'

function Counter(props) {
  return (
    <div className='counter' style={{background:props.background}}>
        Hello Counter {props.initialValue}
    <br />
    <Button title="Increament" size="small" onClick={()=>{
        alert("Increament")
    }}></Button>
    <Button title="Decreament" size="large" onClick={()=>{
        alert("Decreament")
    }}></Button>
    </div> 
  );
}

export default Counter;
