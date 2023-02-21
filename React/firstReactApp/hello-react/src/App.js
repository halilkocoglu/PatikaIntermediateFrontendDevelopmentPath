import './App.css';

const name = "Halil"
const surName = "koc"
const isLoggedIn = true;
function App() {
  return (
    // can use "<React.Fragment><React.Fragment/>" or <></> instead of div. Not recommend
    <div>   
      <h1>{isLoggedIn ? `Ad: ${name}  Soyad: ${surName}`: "Not connected"}</h1>
      
    </div>
  );
}

export default App;
