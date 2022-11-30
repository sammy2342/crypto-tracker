import axios from "axios"
import { useEffect, useState } from "react"

export default function Trending() { 

    const [coinsTrending, setCoinsTrending] = useState([])

    useEffect( () => { 
        async function getCoinTrending() { 
            const coinTreniding = await axios.get('https://api.coingecko.com/api/v3/search/trending')
            console.log(coinTreniding.data.coins)
            setCoinsTrending(coinTreniding.data.coins)
        }
        getCoinTrending()
    }, [])

    // function coinTrend() { 
    //     coinsTrending.map((coin) => {
    //         console.log(coin)
    //     })
    // }
    // coinTrend()
    return ( 
        <>
            {coinsTrending ? <>
            <div>
                {coinsTrending.map((coin, idx) => { 
                    return <div key={idx}>
                        <span><img src={coin.item.small}  /></span>
                        <span>{coin.item.id}</span>
                        <span>{coin.item.symbol}</span>
                        <span>{coin.item.market_cap_rank}</span>
                        <span>{coin.item.score}</span>
                        <span>{coin.item.price_btc}</span>
                    </div>
                })}
            </div>
            </>: null}
        </>
    )
}