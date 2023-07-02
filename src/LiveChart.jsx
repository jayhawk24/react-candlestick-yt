import React, { useEffect, useMemo, useState } from 'react'
import { fetchStockData } from './services'
import { formatStockData } from './utils'
import ReactApexChart from 'react-apexcharts'
import { candleStickOptions } from './constants'

const LiveChart = ({ symbol }) => {
    const [stockData, setStockData] = useState({})

    useEffect(() => {
        fetchStockData(symbol).then(data =>
            setStockData(data)
        )
    }, [])

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    return (
        <ReactApexChart
            series={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options={candleStickOptions}
            type="candlestick"
        />
    )
}

export default LiveChart