import './App.css'

import LiveChart from './LiveChart'



function App() {


  return (
    <>
      <h1>
        Stock Candlestick Chart
      </h1>
      <div style={{ width: "100vh", height: "100%" }}>
        <LiveChart symbol='IBM' />
      </div>
    </>
  )
}

export default App
