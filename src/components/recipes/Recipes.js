import React, { useContext } from 'react';
import RecipeItem from './RecipeItem';
import Spinner from '../layout/Spinner';

import { RecipeContext } from '../../Context';

const Recipes = () => {
    const value = useContext(RecipeContext);
    const [recipes] = value.recipes;
    const [loading] = value.loading;

    if (loading) {
        return <Spinner />
    };

    return (
        <div>
            <div className='container' style={recipeStyle}>
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

const recipeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Recipes;
