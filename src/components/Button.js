import React from "react";


function Button(props) {
    const size=props.size
  return (
    <button className={["buttonDefault",size].join(" ")} onClick={()=>{
       props.onClick()
    }}>{props.title}</button>
  );
}

export default Counter;
