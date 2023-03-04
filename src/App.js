import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <About />
     <Home />
     <Contact />
  </div>
  );
}

export default App;
