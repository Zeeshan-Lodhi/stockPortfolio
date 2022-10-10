import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashBoard from './Components/DashBoard/MainDashBoard'
import Portfolio from './Components/Portfolio/Portfolio'
import AddTransaction from './Components/Transaction/AddTransaction'
import Transaction from './Components/Transaction/Transaction'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainDashBoard />} />
                    <Route path="/transaction" element={<Transaction />} />
                    <Route path="/transaction/add" element={<AddTransaction />} />
                    <Route path="/position" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App