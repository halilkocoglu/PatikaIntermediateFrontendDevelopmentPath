import logo from './logo.svg';
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{padding:"30px"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{color:"red", backgroundColor:"aliceblue", paddingTop:"50px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatem beatae quisquam consectetur, minima maxime quis debitis impedit architecto iusto mollitia asperiores, quo rerum. Repudiandae dolore consequuntur ab quo est.
        </div>
        <div className="card" style={{width: "18rem",margin:"50px", border:"7px", borderColor:"white", borderStyle:"solid", padding:"20px"}}>
        <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <A/>
      <B/>
      </header>
    </div>
  );
}

export default App;
