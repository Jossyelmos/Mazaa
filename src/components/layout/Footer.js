import React from 'react';
import background from '../../images/blue-wood--backgrounds-powerpoint.jpg';

const Footer = () => {
    return (
        <div style={footerStyle}>
            <div className="footer all-center">
                <div className="footer-div-1">
                    <a className='text-center text-dark p-1 f-h' href="/">Home</a>
                    <p>
                        <i className="fa fa-copyright">Copyright <strong>2021 Mazaa.</strong> Designed by <a href="/" >JossyAmos</a></i>
                    </p>
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
    )
}

const footerStyle = {
    backgroundImage: `url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
}

export default Footer;
