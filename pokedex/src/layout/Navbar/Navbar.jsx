import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className='navbar-menu'>
                <li className='navbar-menu-item'>
                    <img className='navbar-menu-icon' src="/menu-icons/pokedex.png" />
                    <Link to="/pokemon" className='navbar-menu-link'>Pokémon</Link>
                </li>
                <li className='navbar-menu-item'>
                    <img className='navbar-menu-icon' src='/menu-icons/natures.png' /><Link to="/natures" className='navbar-menu-link'>Natures</Link></li>
            </ul>
        </div>
    )
}