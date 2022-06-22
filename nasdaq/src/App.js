import logo from './logo.svg';
import './App.css';
import Child from "./Child";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm the Root Component. <br/> My name is App.
        </p>
        <Child name = "Alessandro"/>
        <Child />
        <Child name = "Francesco" />
      </header>
    </div>
  );
}

export default App;
