import {useState} from 'react';

function Counter() {
    let [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(count = 0);
    

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrease}> Decrease </button>
            <button onClick={increase}> Increase </button>
            <button onClick={reset}> Reset </button>

        </div>
    )
}

export default Counter