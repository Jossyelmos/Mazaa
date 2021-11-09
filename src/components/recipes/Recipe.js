import React, { Fragment, useContext } from 'react';
import background from '../../images/toa-heftiba.jpg';
import Menu from '../layout/Menu';
import capture4 from '../../images/Capture4.PNG';
import { useParams } from 'react-router';
import { RecipeContext } from '../../Context';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const Recipe = () => {
    const { id } = useParams();
    const value = useContext(RecipeContext);
    const [recipes] = value.recipes;
    const [loading] = value.loading;

    const details = recipes.filter((recipe) => recipe.id === id);
    console.log("", details);

    if (loading) {
        return <Spinner />
    };

    return (
        <Fragment>
            <div style={bg_style}>
                <Menu />
                <div className="container">
                    <div className="mt-2 all-center">
                        <h1>RECIPE DETAILS</h1>
                        <p><a href="#!">Home </a> - <span><a href='#!'>Recipe Details</a></span></p>
                        
                    </div>
                </div>
            </div>
            <div className="App container">
                <Link to='/recipegrid' className='btn btn-light my-1'>
                    Back to Recipes
                </Link>
                
                {details.map((recipe) => (
                    <div key={recipe.id}>
                        <div className= 'grid-2 my-3'>
                            <img 
                                src={recipe.imageURL} 
                                alt=""
                                style={{ width: '500px', height: '500px' }}
                                className= 'round-img' 
                            />
                            <div className= 'main-sub'>
                                <h1>{recipe.name}</h1>
                                <p style={{ fontSize: '15px' }}>Published on <span className='text-success' style={{ fontSize: '20px' }}>September 27, 2021</span> in Johannesburg</p>
                                <img 
                                    src={capture4} 
                                    alt=""
                                    style={{ width: '600px', marginTop: '-20px', marginLeft: '-20px' }} 
                                />
                                <div className="recipe-div-1">
                                    <ul>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-facebook br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-google-plus br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-twitter br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-linkedin br-c" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className='recipe-p'>
                            Lorem ipsum dolor sit amet, consectetur a dipisicing elit. Ea ratione optio nulla illum, eius do lor maiores nulla illum, sitiamet, consectetur a dipis icing eit amet, conse ulla illum, eius do lor maiores nulla illum, Lorem ipsum dolor sit a et, coinsectetur a dip onsectetur a dipis icing elit. Eaisicing elit. Ea ratione o ptio nulla illum, eius lla illum, Loremo lor sit amet, consectetur a dipis icing eit amet, conse ulla illum, eius do lor maiores nulla illum, Lorem ipsum dolor s it am et, consecetur a dip onsectetur a dipis icing elit. Eaisicing nulla illum, eius lla illum, Lorem ipsum dolor sit.

    Ea ratione o ptio nulla illum, eius lla illum, Loremo lor sit amet, consectetur a dipis icing eit amet, conse ulla illum, us do lor maiores nulla illum, Lorem ipsum dolor s it am et, consect etur a dip onsectetur a dipis icing elit. Eaisicing nulla illum, eius lla illum, Lorem ipsum dolor sit.

                        </p>
                        <div>
                            <a href={recipe.originalURL} className='btn btn-dark btn-block my-1 text-center'>
                                Get Recipe Details
                            </a>
                        </div>
                        <div className='r-last-div'>
                            <h1>Ingredients</h1>
                            {recipe.ingredients.map((ingredient, index) => (
                                <p key={index} className='recipe-p2'>
                                    <i className="fa fa-check text-success" style={{ marginRight: '1rem' }} /> {`${ingredient.quantity} ${ingredient.name}`}
                                </p>
                            ))}
                        </div>
                        <div className='r-last-div'>
                            <h1>Instructions</h1>
                            {recipe.steps.map((step, index) => (
                                <p key={index} className='recipe-p2'>
                                    <i className="fa fa-circle text-success" style={{ marginRight: '1rem', fontSize: '0.6rem' }} /> {step}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

const bg_style = {
    backgroundImage: `url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
};

export default Recipe;

