export const getWeeklyStock = async (symbol) => {
    let response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=5V5OEOEN5K98E697`)
    let data = await response.json()
    return data
}