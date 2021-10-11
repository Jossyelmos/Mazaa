import React from 'react';
import Capture from '../../images/Capture.PNG';

const Navbar = () => {
    return (
        <nav className="navbar bg-black" fixed='Top'>
            <a href="#!">
                <img src={Capture} alt="" style={{ marginTop: '0.5rem' }} />
            </a>
            <button className='btn btn-success' style={{ backgroundColor: '#7AA93C', borderRadius: '4px', padding: '0 1rem 0 1rem', height: '35px' }}>Buy now</button>
        </nav>
    )
}

export default Navbar;
