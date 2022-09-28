import React from 'react';
import Meal from '../Meal/Meal';
import { useEffect, useState } from 'react';

const Shop = ({ search, setSearch }) => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res?.json())
            .then(data => setMeals(data?.meals))
    }, [search])

    // console.log(meals);
    // const [] = meals;
    // meals.map(meal => console.log(meal))

    return (
        <div className='my-5 container mx-auto sm:mx-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                {meals?.map((meal) => (<Meal key={meal.idMeal} meal={meal}></Meal>))}
            </div>
        </div>
    );
};

export default Shop;