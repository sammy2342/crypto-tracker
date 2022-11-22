import * as coinsAPI from '../../utilities/coins-api'
import { useEffect, useState } from 'react'
import './AllCoinPage.css'
import CoinHeader from '../../components/CoinHeader/CoinHeader'
import CoinTable from '../../components/CoinTable/CoinTable'
import { Link } from 'react-router-dom'

export default function AllCoinPage() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    function handleSearch(evt) {
        evt.preventDefault()
        setSearch(evt.target.value)
    }

    const searchCoin = coins.filter((coin) => { 
        return coin.id.toLowerCase().includes(search.toLowerCase())
    })

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
                <input 
                type="search"
                name="search"
                id="coin-page-search-input-crypto"
                placeholder='Search For Crypto Coin...'
                value={search}
                onChange={handleSearch}
                />
                <CoinTable />
                {searchCoin.map((coin, idx) => (
                    <div key={idx} className='coinContainerRow'>
                        <Link to={`/coins/${coin.id}`}><span className='coin-image'><img src={coin.image} alt="" /></span></Link>
                        <span className='coin-name'>{coin.name}</span>
                        <span className='coin-name'>${coin.current_price.toLocaleString()}</span>
                        <span className='coin-price-change'>
                            <span className={coin.price_change_24h.toFixed(2) < 0.01 ? 'coin-red' : 'coin-green'}>
                                {coin.price_change_24h.toFixed(2)}%
                            </span>
                        </span>
                        <span className='coin-name'>${coin.market_cap.toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </>
    )
}