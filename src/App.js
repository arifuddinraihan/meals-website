import './App.css';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Header/Hero';
import Shop from './Components/Shop/Shop';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}></Navbar>
      <div className="container mx-auto">
        <Hero></Hero>
        <Shop search={search}
          setSearch={setSearch}
        ></Shop>
      </div>
    </div>
  );
}

export default App;
