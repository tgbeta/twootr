import Header from './components/Header';
import Main from './components/Main';
import "./App.css"
import { useRef } from 'react';

function App() {

  const focus=useRef(null)
  return (
    <div className="App">
      <Header focus={focus} />
      <Main focus={focus} className='main'/>
    </div>
  );
}

export default App;
