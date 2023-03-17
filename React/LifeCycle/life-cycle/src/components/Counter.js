import React from 'react'
import {useState, useEffect} from 'react';


function Counter() {
    const [number, setNumber] = useState(0);
    // const [name, setName] = useState("Jack");

    
    useEffect(() => {
        console.log("component mounted");
        const interval = setInterval(() => {
            setNumber((number) => number + 1 )
        }, 1000);

        return ()  =>clearInterval(interval);
    }, [])//dependency array
    
    useEffect(() => {
        console.log("num state changed");
        
    }, [number]);
    // useEffect(() => {
    //     console.log("name state changed");
    // }, [name]);
    
    return (
        <div>
            <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Number</button>
        <hr/>
        {/* <h1>{name}</h1>
        <button onClick={() => setName("Mike")}>Name</button> */}
        </div>
    )
}

export default Counter