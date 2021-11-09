import React, { Fragment } from 'react';
import background from '../../images/toa-heftiba.jpg';
import Menu from '../layout/Menu';
import Recipes from '../recipes/Recipes';

const RecipeGrid = () => {
    return (
        <div>
            <div style={bg_style}>
                <div className="container">
                    <Menu />
                    <Fragment>
                        <div className="mt-2 all-center" >
                            <h1>RECIPE GRID</h1>
                            <p><a href="/">Home </a> - <span><a href='#!'>Recipe Grid</a></span></p>
                            
                        </div>
                    </Fragment>
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

export default RecipeGrid;
