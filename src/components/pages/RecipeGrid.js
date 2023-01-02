import React, { Fragment } from 'react';
import image5 from '../../images/resturant.jpg';
import Recipes from '../recipes/Recipes';

const RecipeGrid = () => {
    return (
        <div className="container">
            <div>
                <img src={image5} alt="" className='recipeImg' />
            </div>
            <Fragment>
                <div className="mt-2 all-center" >
                    <h1>RECIPE GRID</h1>
                    <p><a href="/">Home </a> - <span><a href='#!'>Recipe Grid</a></span></p>
                    
                </div>
            </Fragment>
            <Recipes />
        </div>
    );
};

export default RecipeGrid;
