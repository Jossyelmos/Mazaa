import React from 'react';
import background from '../../images/toa-heftiba.jpg';
import image from '../../images/logo.png';
import Recipes from '../recipes/Recipes';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    return (
        <div>
            <div style={bg_style}>
                <div className="container">
                    <div className="menu">
                        <img src={image} alt="logo" className='logo' />
                        <ul className='menu-ul'>
                            <li className='tooltip'>
                                <a className='text-center text-dark p-1' href="/">
                                    Home
                                </a>
                                <ul className="tooltiptext">
                                    <li><a href="/">Home Page 1</a></li>
                                    <li><a href="/">Home Page 2</a></li>
                                </ul>
                            </li>   
                            <li className='tooltip'>
                                <a className='text-center text-dark p-1' href="/">
                                    Pages
                                </a>
                                <ul className="tooltiptext">
                                    <li><Link to="/">"How To" Page</Link></li>
                                    <li><Link to="/">Single Chef Page</Link></li>
                                    <li><Link to="/">Chef List Page</Link></li>
                                    <li><Link to="/">Our History</Link></li>
                                    <li><Link to="/">Booking Table</Link></li>
                                </ul>
                            </li>   
                            <li className='tooltip'>
                                <a className= 'text-center text-dark p-1' href="/recipe">
                                    Recipe
                                </a>
                                <ul className="tooltiptext">
                                    <li><Link to="/recipeList">Recipe List Page</Link></li>
                                    <li><Link to="/recipeGrid">Recipe Grid Page</Link></li>
                                    <li><Link to="/">Single Recipe Style 1</Link></li>
                                    <li><Link to="/">Single Recipe Style 2</Link></li>
                                    <li><Link to="/">Single Recipe Style 3</Link></li>
                                    <li><Link to="/">Single Recipe Style 4</Link></li>
                                </ul>
                            </li>   
                            <li className='tooltip'>
                                <a className= 'text-center text-dark p-1' href="/">
                                    Blogs
                                </a>
                                <ul className="tooltiptext">
                                    <li><Link to="/">Blog Details</Link></li>
                                    <li><Link to="/">Blog Grid</Link></li>
                                    <li><Link to="/">Blog List</Link></li>
                                </ul>
                            </li>   
                            <li>
                                <a className= 'text-center text-dark p-1' href="/">About Us</a>
                            </li>   
                            <li>
                                <a className= 'text-center text-dark p-1' href="/">Contact Us</a>
                            </li>   
                        </ul>  
                        <button className='btn btn-success bt-m'>
                            SUBMIT RECIPE
                        </button>
                        <a href="#!" className="move btn-white round-img">
                        <i className="fa fa-briefcase br-c" />
                        </a>
                    </div>
                    <div className="mt-2 all-center">
                        <h1>RECIPE LIST</h1>
                        <p><a href="/">Home </a> - <span><a href='#!'>Recipe Grid</a></span></p>
                        
                    </div>
                </div>
            </div>
            <Recipes />
        </div>
    );
};

const bg_style = {
    backgroundImage: `url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
};

export default RecipeList;
