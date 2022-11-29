import { useState, useEffect } from "react"
import * as profileAPI from '../../utilities/profiles-api'


export default function ProfilePage() { 

    const [watchlist, setWatchlist] = useState([])



    useEffect( function() {
        async function findProfile() { 
            // const watchlist = await profileAPI.addToWatchList()
            // setWatchlist(watchlist.watchList)
            const profile = await profileAPI.getProfile()
            console.log(profile.watchList)
            setWatchlist(profile.watchList)
        }
        findProfile()
    }, [])



    return ( 
        <>
            {watchlist.length ? <>
                <div>
                    <h1>Hello</h1>
                    <div>
                        {watchlist.map((coin, idx) => {return <div key={idx}>{coin} <button>delete</button></div> })}</div>
                </div>
            </>: null}
        </>
    )
}