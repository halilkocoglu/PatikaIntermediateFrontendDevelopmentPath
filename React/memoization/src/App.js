import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
// if u dont wanna render everytime the data, if its possible to do define outside of scope. 
// const data = {name : "Halil"}

function App() {
  const [number, setNumber] = useState(0); 
  const [text, setText] = useState("");
  const inc = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, []);

  return (
    <div className="App">
      <br />
      <Header inc = {inc}/>
      <br />
      <hr />
      <h1>{number}</h1>
      <br /><br />
      <input   value={text} onChange={({target}) => setText(target.value)} />
      
    </div>
  );
}

export default App;
