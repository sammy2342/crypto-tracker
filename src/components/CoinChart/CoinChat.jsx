import { useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2'
import { CategoryScale, Chart, LinearScale, PointElement, PointElementint } from "chart.js"
import 'chart.js/auto'

import axios from 'axios'


export default function CoinChart({ data, setData}) { 

    const [chartData, setChartData] = useState(null)
    // Chart.register(CategoryScale, LinearScale, PointElement, PointElementint)

    useEffect( function () {
        async function getChartData() {
            let respone = await axios.get(`https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=30`)
            setChartData(respone)
            console.log(respone.data.market_caps[0][0])
        }
        getChartData()
    }, [])
    
    // function date() {
        // console.log(new Date(chartData.data.market_caps[0][0]))
    // }
    // date()

    // function test() {
    //     chartData.data.market_caps.map(date => {
    //         console.log(new Date(date[0]))
    //     })
    // }
    // test()

    return ( 
        <div>
            {chartData ? <>
            <div>
                <Line 
                    data={{
                        labels: chartData.data.market_caps.map(date => {
                            let newDate = new Date(date[0])
                            return newDate
                        }),
                        datasets: [
                            {
                                label: chartData.data.market_caps.map((price) => {
                                    return price[1]
                                }),
                                data: [chartData.data.market_caps[1]],
                                backgroundColor: 'gold'
                            // height={300},
                            }
                    ]
                    }}
                />
            </div>
            </>: null}
        </div>
    )
}