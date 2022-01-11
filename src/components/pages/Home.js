import React from 'react';
import image from '../../images/brooke-lark.jpg';
import image2 from '../../images/sin-recpie-img.jpg';
import image3 from '../../images/today-recipe1.jpg';
import image4 from '../../images/recipe6.png';
import image5 from '../../images/today-recipe2.jpg';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div>
                    <img src={image} alt="" className='homeImg' />
                </div>
            </div>
            <div>
                <div className="grid-2 my-3 main-2">
                    <div>
                        <img src={image2} alt="" className='img-2' />
                    </div>
                    <div className='main-sub'>
                        <h1>
                            Chicken Kebabs with Roasted Red Onions.
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ratione optio nulla illum, eius dolor maiores Lorem ipsum dolor sit amEa ratione optio nullaius dolor maiores et, cnulla illum, eius dolor maiores Lorem ipsumonsectetur adipisicing elit.
                        </p>
                        <button className='btn btn-success bt-m'>
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className="mid-container">
                <div className="container all-center">
                    <h3 className='text-success'>Delicious Taste of</h3>
                    <h1>
                        TODAY RECIPES
                    </h1>
                    <div className="grid-3 all-cards" style={menuStyle2}>
                        <div className="card-3 all-center">
                            <img src={image3} alt="" />
                            <div className="text-left">
                                <a href="/" className='text-dark'>
                                    <p className=" lead m-h">
                                        Haak- Kashmiri Spinach
                                    </p>
                                </a>
                                <p className="names text-light">
                                    By Charles
                                </p>
                                <a href="/" className='text-dark sm-a'>
                                    MAIN COURSE <span className='span'><i className="fa fa-chevron-right fa-xs"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="card-3 card-3-s all-center">
                            <img src={image4} alt="" style={{ margin: '2rem' }} />
                            <div className="text-left">
                                <a href="/" className='text-dark'>
                                    <p className=" lead m-h">
                                        Sesame Horney Roasted
                                    </p>
                                </a>
                                <p className="names text-light">
                                    By Gino D'Acampo
                                </p>
                                <p className='my'>Preparation time: <strong>30 mins</strong></p>
                                <p className='my'>Cooking time: <strong> 10 to 30 mins</strong></p>
                                <p className='my'>Serves: <strong>4 persons</strong></p>
                            </div>
                        </div>
                        <div className="card-3 last-card all-center">
                            <img src={image5} alt="" />
                            <div className="text-left">
                                <a href="/" className='text-dark'>
                                    <p className=" lead m-h">
                                        Chicken Reshmi Kabab
                                    </p>
                                </a>
                                <p className="names text-light">
                                    By Addison
                                </p>
                                <a href="/" className='text-dark sm-a'>
                                    MAIN COURSE <span className='span'><i className="fa fa-chevron-right fa-xs"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const menuStyle2 = {
    gridGap: '2rem',
}

export default Home;
