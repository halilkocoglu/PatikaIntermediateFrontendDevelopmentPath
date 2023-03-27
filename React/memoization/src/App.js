import { useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
// if u dont wanna render everytime the data, if its possible to do define outside of scope. 
// const data = {name : "Halil"}

function App() {
  const [number, setNumber] = useState(0); 
  const data = useMemo( () => {
    return {name : "Halil",number}
  },[number]);
  return (
    <div className="App">
      <br />
      <Header 
      data = {data}/>
      <br />
      <hr />
      <h1>{number}</h1>
      <button onClick={ () => setNumber (number + 1)} > Click </button>
      
    </div>
  );
}

export default App;
