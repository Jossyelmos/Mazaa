import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe: { id, imageURL, name, originalURL } }) => {

    return (
        <div className='card text-center'>
            <img 
                src={imageURL} 
                alt="" 
                className= 'round-img'
                style={{ width: '200px', height: '200px' }} 
            />
            <h3>{name}</h3>
            <Link to={`/recipe/${id}`} className="btn btn-dark btn-sm my-1">
                More
            </Link>
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default RecipeItem;
