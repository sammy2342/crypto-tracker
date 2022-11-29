import { useState, useEffect } from "react"
import * as profileAPI from '../../utilities/profiles-api'


export default function ProfilePage() { 

    const [watchlist, setWatchlist] = useState([])



    useEffect( function() {
        async function getWatchList() { 
            const watchlist = await profileAPI.addToWatchList()
            setWatchlist(watchlist.watchList)
        }
        getWatchList()
    }, [])



    return ( 
        <div>
            <div>{watchlist.map((coin) => {
                <li>{coin[0]}</li>
            })}</div>
        </div>
    )
}