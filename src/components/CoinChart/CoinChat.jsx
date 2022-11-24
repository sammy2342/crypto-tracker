import { useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2'
import { CategoryScale, Chart, LinearScale, PointElement, PointElementint } from "chart.js"
import './CoinChart.css'
import 'chart.js/auto'

import axios from 'axios'


export default function CoinChart({ data, setData}) { 

    const [days, setDays] = useState('90')
    const [chartData, setChartData] = useState(null)

    function handleDayClick(evt) { 
        evt.preventDefault()
        setDays('1')
    }

    function handleWeekClick(evt) {
        evt.preventDefault()
        setDays('7')
    }

    function handleMonthClick(evt) {
        evt.preventDefault()
        setDays('30')
    }

    function handleYearClick(evt) {
        evt.preventDefault()
        setDays('365')
    }

    useEffect( function () {
        async function getChartData() {
            let respone = await axios.get(`https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=${days}`)
            setChartData(respone)
            console.log(respone.data.market_caps[0][0])
        }
        getChartData()
    }, [days])
    


    return ( 
        <div>
            {chartData ? <>
            <div>
                <Line 
                    height={'180px'}
                    width={'300px'}
                    data={{
                        labels: chartData.data.market_caps.map(date => {
                            let newDate = new Date(date[0])
                            return newDate.toDateString()
                        }),
                        datasets: [
                            {
                                label: chartData.data.market_caps.map((price) => {
                                    return price[1]
                                }),
                                data: 
                                    chartData.data.market_caps.map((price) => {
                                        return price[1]
                                    }),
                                backgroundColor: 'gold',
                                showLine: true,
                                borderColor: 'gold',
                                height: '900px'
                            // height={300},
                            }
                    ]
                    }}
                    options={
                        {   
                            elements: {
                                point: {
                                    radius: 0
                                }
                            }
                        }
                    }
                />
            </div>
            </>: null}
            <div className='button-container-days'>
                    <div><button type="submit" className='button-days-coins' onClick={handleDayClick}> days</button></div>
                    <div><button type="submit" className='button-days-coins' onClick={handleWeekClick}> weeks</button></div>
                    <div><button type="submit" className='button-days-coins' onClick={handleMonthClick}> month</button></div>
                    <div><button type="submit" className='button-days-coins' onClick={handleYearClick}> year</button></div>
            </div>
        </div>
    )
}