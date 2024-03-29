import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe: { id, imageURL, name, } }) => {

    return (
        <div className='card text-center'>
            <div className="">
                <img 
                    src={imageURL} 
                    alt="" 
                    className= 'round-img singleImg' 
                />
            </div>
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
