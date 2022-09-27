import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Header/Hero';

function App() {
  return (
    <div>
        <Navbar></Navbar>
      <div className="container mx-auto">
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
