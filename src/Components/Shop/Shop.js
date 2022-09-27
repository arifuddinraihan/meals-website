import React from 'react';
import Meal from '../Meal/Meal';

const Shop = ({data, setMeals}) => {

    const {meals} = data;
    meals.map(meal => console.log(meal))

    return (
        <div className='my-5'>
            
        </div>
    );
};

export default Shop;