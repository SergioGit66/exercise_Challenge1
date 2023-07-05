import { useState, useContext } from "react";


export default function Counter({children}){

    const [counter, setCounter] = useState(0);

    return (
        <useContext.Provider value={{counter}}>
            {children}
        </useContext.Provider>
    )
}
