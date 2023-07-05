import React from "react";
import CounterContextProvider from "./Context";
import Main from "./components/Main";

export default function App() {
  

  return(
    <CounterContextProvider  >
      <Main />
  </CounterContextProvider>
    );
}

