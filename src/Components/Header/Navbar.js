import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ search, setSearch }) => {

    // console.log(search);
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-info shadow-lg px-auto md:px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-white text-sm md:text-xl gap-2">
                        <FontAwesomeIcon icon={faBowlFood} />
                        <strong>Select Your Meals</strong></a>
                </div>
                <div className="flex-none gap-2">
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-5 text-center'>
                <div className="form-control block">
                    <input onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Search" className="input input-bordered" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;