import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Lenis from '@studio-freight/lenis';


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)






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



