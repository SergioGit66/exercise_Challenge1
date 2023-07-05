import React, { useContext } from "react";
import IncrementBtn from "./NextBtn";
import DecrementBtn from "./PrevBtn";
import { CounterContext } from "../Context";


export default function Main() {

    const { counter, setCounter } = useContext(CounterContext)

    return (
        <div>
            <IncrementBtn />
            <p>{counter}</p>
            <DecrementBtn />
        </div>

    )
}