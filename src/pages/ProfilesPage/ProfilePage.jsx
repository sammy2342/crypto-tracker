import axios from "axios"
import { useState, useEffect } from "react"
import * as profileAPI from '../../utilities/profiles-api'


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
        return allCoinsData.find(coin => coin.id === id)?.image.large || 'null'
    }
    getCoinImage()

    return ( 
        <>
            {watchlist.length ? <>
                <div>
                    <h1>Hello</h1>
                    <div>
                        {watchlist.map((coin, idx) =>  <div key={idx}>{coin} <button onClick={(evt) => handleClickDelete(evt, coin)}>delete</button> <img src={getCoinImage(coin)} alt="" /></div> )}</div>
                </div>
            </>: null}
        </>
    )
}