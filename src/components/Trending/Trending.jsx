import axios from "axios"
import { useEffect, useState } from "react"
import './Trending.css'


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
        <div className="outer-cointiner-card-trending">
            <div className="title-for-trending-coin-header">Trending Coins</div>
            {coinsTrending ? <>
            <span className="coin-trending-cointner-card">
                {coinsTrending.map((coin, idx) => { 
                    return <div key={idx} className='trending-card-container'>
                        <span className="trending-coin-item-symbol">{coin.item.symbol}</span>
                        <span className="id-img-span">
                            <span className="img-for-trending-coin"><img src={coin.item.small}  /></span>
                            <span className="trenind-coin-id">{coin.item.id}</span>
                        </span>
                        <span className="trending-rank-coin">Rank: {coin.item.market_cap_rank}</span>
                        <span className="trending-scores-coin"> Score: {coin.item.score}</span>
                        <span className="trending-item-price">{coin.item.price_btc.toFixed(10)} <span className="BTC">BTC</span></span>
                    </div>
                })}
            </span>
            </>: null}
            </div>
        </>
    )
}