import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

import './Navbar.css';

import Temple from '../assets/temple.svg';

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
                <li>
                    <Hamburger onClick={toggleHamburger} isOpen={isOpen} />
                    {isOpen && (
                        <div className='hamburger-menu' onClick={toggleHamburger}>
                            <Sidebar />
                        </div>
                    )}
                </li>
                {!isOpen && <li className='logo'>
                    <img src={Temple} alt="Logo" />
                    <span>Project Workshop</span>
                </li>}
                {!user && (
                    <>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </>
                )}
                {user && !isOpen && (
                    <li>
                        {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                        {isPending && <button className='btn' disabled>Logging out</button>}
                    </li>
                )}
            </ul>
        </div>
    )
}