import './App.css'
import LiveChart from './LiveChart'

function App() {

  return (
    <>
      <h1>
        Stock Candlestick Chart
      </h1>
      <LiveChart symbol={'IBM'} />
    </>
  )
}

export default App
