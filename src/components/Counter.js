import React from "react";
import Button from './Button'

function Counter(props) {
  return (
    <div className='counter' style={{background:props.background}}>
        Hello Counter {props.initialValue}
    <br />
    <Button title="Increament"></Button>
    <Button title="Decreament"></Button>
    </div> 
  );
}

export default Counter;
