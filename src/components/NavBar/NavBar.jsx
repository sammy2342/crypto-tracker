import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'
import * as profileAPI from '../../utilities/profiles-api'
import { useState, useEffect, useCallback, useMemo } from "react"
import { SET_WATCHLIST_ACTION } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'

export default function NavBar({ user, setUser }) {

    // const [itemsInWatchList, setItemInWatchList] = useState([])
    const [{itemsInWatchList}, dispatch] = useStateValue()
    const badgeNumber = itemsInWatchList.length
    const setItemInWatchList = value => dispatch({type: SET_WATCHLIST_ACTION, value})

    useEffect( function() { 
        async function findWatchlistItem() {
            const profile = await profileAPI.getProfile()
            setItemInWatchList(profile.watchList)
            // console.log(itemsInWatchList, 'this')
        }
        findWatchlistItem()
    }, [])

    useEffect( () => { 
        function watchlistItemHandler() { 
            console.log(itemsInWatchList)
        }
        watchlistItemHandler()
    }, [itemsInWatchList])
    
    
    function handleLogOut() {
        dispatch({type: SET_WATCHLIST_ACTION, value: []})
        userService.logOut()
        setUser(null)
    }


    return (
        <nav className='navbar-container'>
            <div className='logo-coin-container'>
                <h1>Cryptofolio</h1>
            </div>
            <div className='navbar-links-container'>
                {/* <Link to="/orders" className='navbar-links'>Order History</Link> */}
                &nbsp;  &nbsp;
                <Link to='/profiles' className='navbar-links'>Profile <span className='length-items-in-watch-list-2'>{itemsInWatchList.length}</span></Link>
                <Link to="/" className='navbar-links'>All Coins</Link>
                &nbsp;  &nbsp;
                <span className='user-title-navbar'>Welcome, {user.name}</span>
                &nbsp;  &nbsp;
                <Link to="" onClick={handleLogOut} className='navbar-links'>Log Out</Link>
            </div>
        </nav>
    )
}