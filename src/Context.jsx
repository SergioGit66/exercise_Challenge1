import React, { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext(null);
export default function CounterContextProvider({ children }) {

  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}