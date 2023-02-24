import './App.css';
import User from './Components/User';

const friends = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Dave',
  },
  {
    id: 3,
    name: 'David',
  },
  {
    id: 4,
    name: 'Emily',
  },
  {
    id: 5,
    name: 'Melissa',
  }
]

function App() {
  return (
    // can use "<React.Fragment><React.Fragment/>" or <></> instead of div. Not recommend
    <div>   
      <User 
      name="Jacob" 
      surname="Dave" 
      isLoggedIn={true} 
      age={18}
      friends={friends}
      />
      
    </div>
  );
}

export default App;
