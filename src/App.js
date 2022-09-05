import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Context } from './context/context';
import { useState } from 'react';

function App() {
  const [ audioRef, setAudioRef ] = useState()
  const [ context, setContext ] = useState()
  return (
    <div className="App">
      <Context.Provider>
        <Header />
        <Main setContext = { setContext } audioRef = { audioRef }/>
        <Footer context = { context } setAudioRef = { setAudioRef } />
      </Context.Provider>
    </div>
  );
}

export default App;
