import * as coinsAPI from '../../utilities/coins-api'
import { useEffect, useState } from 'react'
import './AllCoinPage.css'
import CoinHeader from '../../components/CoinHeader/CoinHeader'

export default function AllCoinPage() {
    const [coins, setCoins] = useState([])

    useEffect( function () { 
        console.log('this effect is running')
        async function getCoin() {
            const coin = await coinsAPI.getAllCoin()
            // console.log(coin)
            setCoins(coin)
            // const data = res. - axios
            // const data = await res.json() - fetch
        }
        getCoin()
    }, [])


    return (
        <>
            <CoinHeader coins={coins} setCoins={setCoins}/>
            <div className='coinContainer'>
                <h1 className='search-coin-title'>Cryptocurrency Find Your Coin</h1>
                <input type="search" name="" id="coin-page-search-input-crypto" placeholder='Search For Crypto Coin...'/>
                <table className='table-coin'>
                    <tr className='table-row-coin'>
                        <td>Logo</td>
                        <td>Coin</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Market Cap</td>
                    </tr>
                </table>
                {coins.map((coin, idx) => (
                    <div key={idx} className='coinContainerRow'>
                        <span className='coin-image'><img src={coin.image} alt="" /></span>
                        <span>{coin.name}</span>
                        <span>${coin.current_price}</span>
                        <span className='coin-price-change'>{coin.price_change_24h.toFixed(2)}</span>
                        <span>{coin.market_cap}</span>
                    </div>
                ))}
            </div>
        </>
    )
}