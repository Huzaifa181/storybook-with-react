import React from "react";


function Button(props) {
  return (
    <button onClick={()=>{
        alert("hello")
    }}>{props.title}</button>
  );
}

export default Counter;
