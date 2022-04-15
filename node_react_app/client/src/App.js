// import logo from './logo.svg';
import Greeting from './component/Greeting';
import SearchBar from './component/SearchBar';
import './style/App.sass';

function App() {
  return (
    <div className="App">
      <header className="content px">
        <Greeting/>  
        <SearchBar/>
      </header>
    </div>
  );
}

export default App;
