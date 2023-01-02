import React, { Fragment, useContext } from 'react';
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

    if (loading) {
        return <Spinner />
    };

    return (
        <Fragment>
            <div>
                <div className="container">
                    <div className="mt-2 all-center">
                        <h1>RECIPE DETAILS</h1>
                        <p><a href="/">Home </a> - <span><a href='#!'>Recipe Details</a></span></p>
                        
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
                                className= 'round-img singleRecipeImg' 
                            />
                            <div className= 'main-sub'>
                                <h1>{recipe.name}</h1>
                                <p style={{ fontSize: '15px' }}>Published on <span className='text-success' style={{ fontSize: '20px' }}>September 27, 2021</span> in Johannesburg</p>
                                <img 
                                    src={capture4} 
                                    alt=""
                                    className='recipeCapture'
                                />
                                <div className="recipe-div-1">
                                    <ul>
                                        <li>
                                            <a href="https://web.facebook.com/oluniyi.olufisoyeamos" target='_blank' without rel="noreferrer">
                                                <i className="fa fa-facebook br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" target='_blank' without rel="noreferrer">
                                                <i className="fa fa-google-plus br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/home" target='_blank' without rel="noreferrer">
                                                <i className="fa fa-twitter br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/olufisoye-amos-oluniyi-966851228/" target='_blank' without rel="noreferrer">
                                                <i className="fa fa-linkedin br-c" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className='recipe-p'>
                        This Eat Well with Recipe's cookbook is filled with great delicious and wholesome recipes
for breakfast, lunch and dinner, inspired by the Indian food trend. All recipes are
100% plant-based, meaning they are dairy-free, egg-free and contain no meat or
animal protein. The recipes are non-GM and cholesterol-free so they are good for
your heart and overall health.<br/>

                        “Amazing flavor, and so simple! No salt needed here. In fact, you may wish to use half the ranch dressing mix to cut back on the saltiness. Found this Crock-Pot pot roast recipe one of a website called www.recipegoldmine.com. It's all the rage there, so I thought I'd try it.”
                        </p>
                        <div>
                            <a href={recipe.originalURL} target='_blank' without rel="noreferrer" className='btn btn-dark btn-block my-1 text-center'>
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

export default Recipe;

