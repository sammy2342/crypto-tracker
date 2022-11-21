import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='navbar-container'>
            <div className='logo-coin-container'>
                <h1>Cryptofolio</h1>
            </div>
            <div className='navbar-links-container'>
                <Link to="/orders" className='navbar-links'>Order History</Link>
                &nbsp;  &nbsp;
                <Link to="/coins" className='navbar-links'>All Coins</Link>
                &nbsp;  &nbsp;
                <span className='user-title-navbar'>Welcome, {user.name}</span>
                &nbsp;  &nbsp;
                <Link to="" onClick={handleLogOut} className='navbar-links'>Log Out</Link>
            </div>
        </nav>
    )
}