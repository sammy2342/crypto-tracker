import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import * as coinsAPI from '../../utilities/coins-api'
import ReactHtmlParser from "react-html-parser";
import CoinChart from "../../components/CoinChart/CoinChat";
import './CoinDetailsPage.css'
import * as profilesApi from '../../utilities/profiles-api'
import { useStateValue } from "../../context/StateProvider";
import { SET_WATCHLIST_ACTION } from '../../context/reducer'

export default function CoinDetailsPage() {
    const [data, setData] = useState(null);
    const [watchlist, setWatchlist] = useState('')
    const navigate = useNavigate()
    const { coinId } = useParams();
    const [button, setButton] = useState(false)
    // if your not using the value _ "common  practice"
    const [_, dispatch] = useStateValue()
    
    useEffect(() => {
        async function getCoinId() {
            const res = await coinsAPI.getSingleCoin(coinId);
            // console.log(coinId) coinId is the name of the coin 
            // res is the data for the single coin 
            setData(res)
        }
        getCoinId()
    }, []);

    async function handleClick(evt) {
        evt.preventDefault()
        const res = await profilesApi.addToWatchList(coinId)
        console.log(res, 'this')
        // console.log('this works')
        dispatch({type: SET_WATCHLIST_ACTION, value: res.watchList})
        setButton(!button)
    }

    return (
    
        <div className="coin-details-container">
            {data ? <>
                <div className="coin-details-left-container">
                    <div className="img-coin-detail-page"><img src={data.image.large} alt="" /></div> 
                    <div className="name-coin-detail-page">{data.name}</div>
                    <div className="name-coin-detail-description">{ data.description.en.split('. ')[0] + data.description.en.split('. ')[1] + data.description.en.split('. ')[2]}.</div>
                    <div className="coin-dtail-page-rank">Rank: {data.market_cap_rank}</div>
                    <div className="coin-dtail-page-market">Market Cap: ${data.market_data.market_cap.usd.toLocaleString()}</div>
                    {/* <div>{data.country_origin}</div> */}
                    <button className={'add-coin-watchlist' + (button ? '-added' : '')} onClick={handleClick}>{ button ? 'Added To WatchList' : 'Add Coin To WatchList'}</button>
                </div>
                <div className="chart-coin-container">
                    <CoinChart data={data} setData={setData}/>
                </div>
            </>: null}
        </div>
    )
}