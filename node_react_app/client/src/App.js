// import logo from './logo.svg';
import { useState } from 'react';
import Greeting from './component/Greeting';
import SearchBar from './component/SearchBar';
import GitAPI from './component/GitAPI'
import './style/App.sass';

function App() {

  const[textInput, setTextInput] = useState('boomtownroi');
  const registerInput = textInput => {
    setTextInput(textInput);
  }

  return (
    <div className="App">
      <header className="content px">
        <Greeting/>  
        <SearchBar registerInput={registerInput}/>
        <GitAPI props={textInput}/>
      </header>
    </div>
  );
}

export default App;
