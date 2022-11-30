import axios from "axios"
import { useState, useEffect } from "react"
import * as profileAPI from '../../utilities/profiles-api'
import Trending from '../../components/Trending/Trending'


export default function ProfilePage() { 

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
                <div>
                    <h1>watchlist</h1>
                    <div>
                        {watchlist.map((coin, idx) =>  <div key={idx}><img src={getCoinImage(coin)} alt="" /> {coin} <button onClick={(evt) => handleClickDelete(evt, coin)}>delete</button> </div> )}</div>
                </div>
            </>: null}
            <Trending /> 
        </>
    )
}