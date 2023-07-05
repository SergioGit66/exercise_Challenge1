import { useState, useContext  } from "react";
import React from "react";
import { CounterContext } from "../Context";



export default function IncrementBtn(){

    const { counter, setCounter } = useContext(CounterContext);

   return(
    <button onClick={() => {setCounter(counter + 1)}}>+</button>
   )
}
