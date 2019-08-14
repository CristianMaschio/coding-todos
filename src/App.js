import React from "react"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import Routes from "./pages/Routes"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
