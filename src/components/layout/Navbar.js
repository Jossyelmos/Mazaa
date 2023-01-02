import React from 'react';
import image from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>           
            <div className="navbar bg-grey py-2">
                <img src={image} alt="logo" className='logo' style={{ paddingLeft: '50px', width: '120px' }} />
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>   
                    <li>
                        <Link to="/recipeGrid">
                            Recipe
                        </Link>
                    </li>   
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>  
                </ul>  
            </div>
        </div>
    );
};

export default Navbar;
