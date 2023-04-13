import './App.css';
import {Paragraph, Button} from 'shark-test-ui'
import 'shark-test-ui/dist/index.css'
function App() {
  return (
    <div className="App">
      <Button text= "Click" onClick = {() => alert("asd")}/>
      <Paragraph text= "Hello"/>
    </div>
  );
}

export default App;
