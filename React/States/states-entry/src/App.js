import {useState } from 'react';

function App() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(['John','Melissa']);
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('Jack')}>Change name</button>
      <button onClick={() => setAge(17)}>Change age</button>
      <hr />

      {
        friends.map((friend, index) => (<div key={index}>{friend}</div>))
      }
      <button onClick={() => setFriends([...friends,'Joe'])}>Add friend</button>

    </div>
    // if u wanna save previous data, we need to use '...friends'
  );
}

export default App;
