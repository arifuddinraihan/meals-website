import React from 'react';

const Meal = ({meal}) => {
    const { idMeal, strMeal:name, strInstructions:details, strMealThumb:img } = meal; 
    return (
        <div className='ml-2 mr-2'>
            <div className='h-4/5'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='h-full' src={img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm md:text-lg">{name}</h2>
                        <p className='text-xs md:text-sm'>{details?details.slice(0,100) : "Details not available"}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;