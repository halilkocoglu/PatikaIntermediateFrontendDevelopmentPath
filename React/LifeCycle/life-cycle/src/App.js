import Counter from './components/Counter';
import {useState } from 'react';

function App() {
  const [IsInvisible, setIsInvisible] = useState(true);
  
  return (
    <div className='App'>
      {IsInvisible && <Counter/>}
      <br/>
      <button onClick={() => setIsInvisible(!IsInvisible)}>Toggle </button>
    </div>
  );
  
}

export default App;