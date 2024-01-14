import { NavLink } from 'react-router-dom';

import './Sidebar.css';
import AddIcon from '../assets/add_icon.svg';
import DashboardIcon from '../assets/dashboard_icon.svg';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    <p>Hello, user</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <img src={DashboardIcon} alt="Dashboard icon"/>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>
                                <img src={AddIcon} alt="Create project icon" />
                                <span>New Project Icon</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
