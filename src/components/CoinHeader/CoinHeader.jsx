import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useEffect, useState } from 'react'
import './CoinHeader.css'

export default function CoinHeader({coins, setCoins}) {

    const items = coins.map((coin) => {
        return <div className='coin-ticker-container'>
                <div className='image-coin-ticker'><img src={coin.image} alt="" id='coin-ticker-image' /></div>
                <div className='coin-name-container'>
                    <div className='name-coin-ticker'>{coin.name}</div>
                    <div className='symbol-coin-ticker'>{coin.symbol}</div>
                </div>
            </div>
    })

    const responsive = {
        0: {
            items: 1,
        },
        1024: {
            items: 3
        }
    }


    return (
        <div className='coin-header-page'>
                <h1 className='coin-title-home-page'>Cortfolio tracker</h1>
                <h4 className='coin-home-page'>Get All The Info For Your Favorite Crypto Currency</h4>
                <AliceCarousel 
                    // mouseTracking this if you want to stop it when you put your mouse on it
                    infinite
                    items={items}
                    autoPlayInterval={500}
                    animationDuration={1500}
                    autoPlay
                    responsive={responsive}
                />
        </div>
    )
}

