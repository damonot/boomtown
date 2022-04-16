// import logo from './logo.svg';
import { useState } from 'react';
import Greeting from './component/Greeting';
import SearchBar from './component/SearchBar';
import './style/App.sass';

function App() {

  const[name, setName] = useState('default');

  function changeName(name){
    console.log(name)
    setName(name);
  }

  return (
    <div className="App">
      <header className="content px">
        <Greeting/>  
        <SearchBar changeName={changeName}/>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
