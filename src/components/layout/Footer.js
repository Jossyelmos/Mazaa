import React from 'react';
import background from '../../images/blue-wood--backgrounds-powerpoint.jpg';

const Footer = () => {
    return (
        <div style={footerStyle}>
            <div className="footer">
                <div className="grid-3 text-left">
                    <div className="footer-div-1">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor cididunt Lorem ipsum dolor sit amet, nempor in cididunt.</p>
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
                    <div className="footer-div-2">
                        <h1>The Menu</h1>
                        <ul>
                            <li>
                                <a href="#!">
                                <i className="fa fa-circle text-white" style={{ marginRight: '1rem', fontSize: '0.5rem' }} />Special Items
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <i className="fa fa-circle text-white" style={{ marginRight: '1rem', fontSize: '0.5rem' }} />Fresh Breakfast
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <i className="fa fa-circle text-white" style={{ marginRight: '1rem', fontSize: '0.5rem' }} />Lunch Menu
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <i className="fa fa-circle text-white" style={{ marginRight: '1rem', fontSize: '0.5rem' }} /> Dinner Items
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <i className="fa fa-circle text-white" style={{ marginRight: '1rem', fontSize: '0.5rem' }} />We Offered Food
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-div-1">
                        <h1>Get in Touch</h1>
                        <i className="fa fa-clock-o fa-4x text-success" />
                        <div className="last-div">
                            <p>Monday- Friday: <br /> 
                                <span>
                                    <strong>08am- 12pm</strong>
                                </span>
                            </p>
                            <p>Saturday- Sunday: <br /> 
                                <span>
                                    <strong>10am- 11pm</strong>
                                </span>
                            </p>
                        </div>
                        <i className="fa fa-map-marker fa-4x text-success" style={{ width: '50px', marginTop: '6rem', marginLeft: '0.6rem' }} />
                        <div className="last-div-2">
                            <p>
                                8121 Sierra Lane Tampa, Florida 33604
                            </p>
                        </div>
                    </div>
                </div>
                <div className="last-link all-center">
                    <div className="menu">
                        <ul>
                            <li>
                                <a className='text-center text-dark p-1' href="/">Home</a>
                            </li>   
                            <li>
                                <a className='text-center text-dark p-1' href="/">Sitemap</a>
                            </li>   
                            <li>
                                <a className= 'text-center text-dark p-1' href="/">Privacy Policy</a>
                            </li>   
                            <li>
                                <a className= 'text-center text-dark p-1' href="/">Contact</a>
                            </li>   
                        </ul>  
                    </div>
                    <p>
                        <i className="fa fa-copyright">Copyright <span>2021 Mazaa.</span> Designed by <a href="/" >JossyAmos</a></i>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

const footerStyle = {
    backgroundImage: `url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
}

export default Footer;
