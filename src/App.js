import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

const App = () => {
  const [ audioRef, setAudioRef ] = useState()
  const [ context, setContext ] = useState()

  return (
    <div className="App">
      <Header />
      <Main setContext = { setContext } audioRef = { audioRef }/>
      <Footer context = { context } setAudioRef = { setAudioRef } />
    </div>
  )
}

export default App
