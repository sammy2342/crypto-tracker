import axios from "axios"
import { useState, useEffect } from "react"
import * as profileAPI from '../../utilities/profiles-api'
import Trending from '../../components/Trending/Trending'
import './ProfilePage.css'
import userEvent from "@testing-library/user-event"

export default function ProfilePage({ user }) { 

    const [watchlist, setWatchlist] = useState([])
    const [profileId, setProfileId] = useState(null)
    const [allCoinsData, setAllCoinsData] = useState([])


    useEffect( function() {
        async function findProfile() { 
            // const watchlist = await profileAPI.addToWatchList()
            // setWatchlist(watchlist.watchList)
            const profile = await profileAPI.getProfile()
            // console.log(profile)
            setProfileId(profile._id)
            setWatchlist(profile.watchList)
        }
        findProfile()
    }, [])

    async function handleClickDelete(evt, coin) { 
        evt.preventDefault()
        const profile = await profileAPI.deleteCoinInWatchlist(profileId, coin)
        // console.log(profile)
        setWatchlist(profile.watchList)
    }

    useEffect( function() { 
        async function getAllCoins() {
            const allCoins = await axios.get('https://api.coingecko.com/api/v3/coins?per_page=250')
            // console.log(allCoins.data.data.id)
            setAllCoinsData(allCoins.data)
        }
        getAllCoins()
    }, [])

    function getCoinImage(id) { 
        // Optinal chaining 
        // ?. it just return undefind or null instead of an error 
        // null if the image dosent exit just give it a random imageplaceholder from the internet
        return allCoinsData.find(coin => coin.id === id)?.image.large || 'null'
    }
    getCoinImage()

    return ( 
        <>
            {watchlist.length ? <>
            <div className="watchlist-trend-container">
                    <div className="watchlist-container">
                        <h1 className="watchlist-title-container">Watchlist </h1>
                        <h6 className="user-watchlist-name">{user.name} watchList <span className="amount-of-coin-in-watchlist">{watchlist.length}</span></h6>
                        <div className="watchlist-container-coins">
                            {watchlist.map((coin, idx) =>  <div key={idx} className='watchlist-coins-list-button-image'><img src={getCoinImage(coin)} alt="" /> {coin} <button className="watchlist-delete-button" onClick={(evt) => handleClickDelete(evt, coin)}>delete</button> </div> )}</div>
                    </div>
                    <div >
                    <Trending /> 
                    </div>
            </div>
            
            </>: null}
        </>
    )
}