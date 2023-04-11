import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 title='count'>
                {count}
            </h1>
            <div>
                <button title='increase' onClick={() => setCount(count+1)}>
                    Increase
                </button>
                <button  title='decrease' onClick={() => setCount(count-1)}>
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default Counter