export const formatWeeklyData = (stockData) => {
    const seriesData = []
    if (!stockData['Weekly Time Series']) {
        return seriesData;
    }

    Object.entries(stockData['Weekly Time Series']).forEach((item) => {
        seriesData.push(
            {
                "x": new Date(item[0]),
                "y": [item[1]['1. open'], item[1]['2. high'], item[1]['3. low'], item[1]['4. close']]
            }
        )
    })

    return seriesData;
}