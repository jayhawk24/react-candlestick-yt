import { useState, useEffect, useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'

import { getWeeklyStock } from './services'
import { formatWeeklyData } from './utils'

const options = {
    chart: {
        type: "candlestick",
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};

// eslint-disable-next-line react/prop-types
const LiveChart = ({ symbol }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await getWeeklyStock(symbol)
            setData(response)
        }
        getData()
    }
        , [symbol])

    const chartData = useMemo(() => formatWeeklyData(data), [data])

    return (
        <ReactApexChart
            options={options}
            series={
                [{
                    "data": chartData
                }]
            }
            type="candlestick"
        />
    )
}

export default LiveChart