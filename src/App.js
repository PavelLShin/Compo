import './App.css'
import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CardPage from './Components/CardPage'

function App() {
  let priceAll = 6900
  const [count, setCount] = useState(1)
  const [basket, setBasket] = useState(false)
  return (
    <div className="App">
      <Header
        setBasket={setBasket}
        priceAll={priceAll}
        count={count}
        setCount={setCount}
      />
      <CardPage
        basket={basket}
        setBasket={setBasket}
        priceAll={priceAll}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </div>
  )
}

export default App
