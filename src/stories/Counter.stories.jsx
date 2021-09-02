import Counter from '../components/Counter'

export default {
    title:"Counter",
    component:Counter
}

export function CounterDefault() {
    return(
        <Counter></Counter>
    )
}

export function CounterWithValue() {
    return(
        <Counter initialValue={34}></Counter>
    )
}

export function CounterWithValueAndColor() {
    return(
        <Counter initialValue={34} backgroundColor="red"></Counter>
    )
}