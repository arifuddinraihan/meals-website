import React from 'react';

const Meal = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;