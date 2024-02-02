import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

import './Navbar.css';
import Hamburger from './Hamburger';

import Temple from '../assets/temple.svg';
import { useState } from 'react';

export default function Navbar() {

    const {logout, isPending} = useLogout();
    const {user} = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <img src={Temple} alt="Logo" />
                    <span>Project Workshop</span>
                </li>
                {!user && (
                    <>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </>
                )}
                {user && (
                    <li>
                        {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                        {isPending && <button className='btn' disabled>Logging out</button>}
                    </li>
                )}
            </ul>

            <div className='hamburger' onClick={toggleHamburger}>
                <Hamburger />
            </div>
        </div>
    )
}