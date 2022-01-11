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
            <div className='container grid-3'>
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
