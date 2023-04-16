import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter/counterSlice'

function Counter() {
  const counterValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(2)
  return (
    <div>
      <h1>{counterValue}</h1>

      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <br /><br />
      <input 
      type="number" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={() => dispatch(incrementByAmount(inputValue))}>Increase By Amount</button>

    </div>
  )
}

export default Counter