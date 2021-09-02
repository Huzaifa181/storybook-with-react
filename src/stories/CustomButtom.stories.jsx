import React from "react";
import Button from '../components/Button'

export default {
    title:"Button",
    component:Button
}

export function DefaultButton() {
    return(
        <Button title="Hello"></Button>
    )
}

export function SmallButton() {
    return(
        <Button title="Hello" size="small"></Button>
    )
}

export function LargeButton() {
    return(
        <Button title="Hello" size="large"></Button>
    )
}

export function ButtonWithEvent() {
    return(
        <Button title="Hello" size="large" onClick={()=>{
            alert("ButtonWithEvent")
        }}></Button>
    )
}