import React from 'react';
import image from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>           
            <div className="container">
                <div className="menu">
                    <img src={image} alt="logo" className='logo' />
                    <ul className='menu-ul'>
                        <li className='tooltip'>
                            <Link className='text-center text-dark p-1' to="/">
                                Home
                            </Link>
                        </li>   
                        <li className='tooltip'>
                            <Link className='text-center text-dark p-1' to="/#">
                                Pages
                            </Link>
                        </li>   
                        <li className='tooltip'>
                            <Link className= 'text-center text-dark p-1' to="/recipeGrid">
                                Recipe
                            </Link>
                        </li>   
                        <li className='tooltip'>
                            <Link className= 'text-center text-dark p-1' to="/">
                                Blogs
                            </Link>
                        </li>   
                        <li>
                            <Link className= 'text-center text-dark p-1' to="/#">About Us</Link>
                        </li>   
                        <li>
                            <Link className= 'text-center text-dark p-1' to="/#">Contact Us</Link>
                        </li>   
                    </ul>  
                    <button className='btn btn-success bt-m'>
                        SUBMIT RECIPE
                    </button>
                    <a href="#!" className="move btn-white round-img">
                    <i className="fa fa-briefcase br-c" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
