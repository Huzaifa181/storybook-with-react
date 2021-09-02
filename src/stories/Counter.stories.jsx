import React from "react";
import Counter from '../components/Counter'
import {withKnobs, number, object} from "@storybook/addon-knobs"
//knos is used to change the dynamic value in real time story book run on local host

export default {
    title:"Counter",
    component:Counter,
    decorators:[withKnobs]
}

export function CounterDefault() {
    return(
        <Counter></Counter>
    )
}

export function CounterWithValue() {
    return(
        <Counter initialValue={number("initialValue", 34)}></Counter>
    )
}

export function CounterWithValueAndColor() {
    return(
        <Counter initialValue={34} backgroundColor="red"></Counter>
    )
}