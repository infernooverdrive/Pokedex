import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className='navbar-menu'>
                <li className='navbar-menu-item'>
                    <Link to="" className='navbar-menu-link'>Pokémon</Link>
                </li>
                <li><Link to="" className='navbar-menu-link'>Natures</Link></li>
            </ul>
        </div>
    )
}