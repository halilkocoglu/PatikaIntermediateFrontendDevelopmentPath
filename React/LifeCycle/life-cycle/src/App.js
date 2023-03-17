import {useState, useEffect} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Jack");

  
  useEffect(() => {
    console.log("component mounted");
  }, [])//dependency array
  
  useEffect(() => {
    console.log("num state changed");
  }, [number]);
  useEffect(() => {
    console.log("name state changed");
  }, [name]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Number</button>
      <hr/>
      <h1>{name}</h1>
      <button onClick={() => setName("Mike")}>Name</button>

    </div>
  );
}

export default App;
