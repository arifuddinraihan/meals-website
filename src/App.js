import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Header/Hero';
import Shop from './Components/Shop/Shop';
import { useEffect, useState } from 'react';

function App() {

  const [ meals , setMeals] = useState({})

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
    .then(res => res?.json())
    .then(data => setMeals(data))
  },[])

  // console.log(meals);

  return (
    <div>
        <Navbar></Navbar>
          <div className="container mx-auto">
            <Hero></Hero>
            <Shop data={meals} 
            setMeals={setMeals}
            key={meals.idMeal}
            ></Shop>
          </div>
    </div>
  );
}

export default App;
