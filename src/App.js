import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Context } from './context/context';

function App() {
  return (
    <div className="App">
      <Context.Provider>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
