import * as coinsAPI from '../../utilities/coins-api'
import { useEffect, useState } from 'react'
import './AllCoinPage.css'

export default function AllCoinPage() {
    const [coins, setCoins] = useState([])

    useEffect( function () { 
        console.log('this effect is running')
        async function getCoin() {
            const coin = await coinsAPI.getAllCoin()
            console.log(coin)
            setCoins(coin)
            // const data = res. - axios
            // const data = await res.json() - fetch
        }
        getCoin()
    }, [])


    return (
        <>
            <h1>AllCoinPage</h1>
            <div className='coinContainer'>
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
                        <span>{coin.ath_change_percentage}</span>
                        <span>{coin.market_cap}</span>
                    </div>
                ))}
            </div>
        </>
    )
}