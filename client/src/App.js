import logo from './logo.svg';
import './App.css';
import Child from "./Child";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <Child name = "Alessandro" year_birthday = "1977"/>
      </header>
    </div>
  );
}

export default App;
