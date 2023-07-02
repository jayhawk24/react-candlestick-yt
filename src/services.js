const VITE_API_KEY = import.meta.env.VITE_API_KEY || "5V5OEOEN5K98E697"

export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${VITE_API_KEY}`)
    const data = await response.json()
    return data
}
