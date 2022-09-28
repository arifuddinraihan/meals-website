import React from 'react';
import './Modal.css'

const Modal = ({ modalMeal, setModalMeal }) => {
    const { strMeal: name, strInstructions: details, strMealThumb: img } = modalMeal;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setModalMeal(null)}
                        htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 z-10">✕</label>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={img} alt={name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{details}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Modal;