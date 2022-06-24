import logo from './logo.svg';
import './App.css';
import Child from "./components/Child";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <SearchForm />
        <Child />
      </header>
    </div>
  );
}

export default App;
