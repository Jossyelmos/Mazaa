import React from 'react';
import background from '../../images/toa-heftiba.jpg';
import image from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div style={bg_style}>
                <div className="container">
                    <div className="menu">
                        <img src={image} alt="logo" className='logo' />
                        <ul>
                            <li>
                                <a className='text-center text-dark p-1 tooltip' href="/">
                                    Home
                                    <span className="tooltiptext">
                                        <p><a href="/">Home Page 1</a></p>
                                        <p><a href="/">Home Page 2</a></p>
                                    </span>
                                    
                                </a>
                            </li>   
                            <li>
                                <a className='text-center text-dark p-1 tooltip' href="/">
                                    Pages
                                    <span className="tooltiptext">
                                        <p><a href="/">"How To" Page</a></p>
                                        <p><a href="/">Single Chef Page</a></p>
                                        <p><a href="/">Chef List Page</a></p>
                                        <p><a href="/">Our History</a></p>
                                        <p><a href="/">Booking Table</a></p>
                                    </span>
                                </a>
                            </li>   
                            <li>
                                <a className= 'text-center text-dark p-1 tooltip' href="/">
                                    Recipe
                                    <span className="tooltiptext">
                                        <p><Link to="/recipeList">Recipe List Page</Link></p>
                                        <p><Link to="/recipeGrid">Recipe Grid Page</Link></p>
                                        <p><a href="/">Single Recipe Style 1</a></p>
                                        <p><a href="/">Single Recipe Style 2</a></p>
                                        <p><a href="/">Single Recipe Style 3</a></p>
                                        <p><a href="/">Single Recipe Style 4</a></p>
                                    </span>
                                </a>
                            </li>   
                            <li>
                                <a className= 'text-center text-dark p-1 tooltip' href="/">
                                    Blogs
                                    <span className="tooltiptext">
                                        <p><a href="/">Blog Details</a></p>
                                        <p><a href="/">Blog Grid</a></p>
                                        <p><a href="/">Blog List</a></p>
                                    </span>
                                </a>
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
                        <i class="fa fa-briefcase br-c" />
                        </a>
                    </div>
                    <div className="m-t text-left">
                        <p className="lead-2">The Perfect Choice</p>
                        <h1 className='m-h'>Chicken and Mushroom</h1>
                        <p className='lead-3'>Fresh, organic ingredients. Carefully prepared</p>
                    </div>
                        <button className='btn btn-success bt-m'>
                            BOOK A TABLE
                        </button>
                </div>
            </div>
        </div>
    )
}

const bg_style = {
    backgroundImage: `url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
};

export default Home;
