import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SideBar from '../DashBoard/Sidebar/SideBar'
import Loading from '../Loader/Loading'
import './transaction.css'

const Transaction = () => {
    const [stocks, setStocks] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const fetchStocks = async () => {
        setLoading(true)
        const { data } = await axios.get("http://localhost:8000/stock/read")
        setStocks(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchStocks()
    }, []);

    return (
        <>
            <div className='d-flex'>
                <SideBar />
                <div className="right_section container">
                    <Button className='submit_login mt-2' onClick={() => { navigate("/transaction/add") }}>Add transaction</Button>
                    {loading && <Loading />}
                    <div className='mt-3'>
                        <table className='table'>
                            <thead className="thead-dark">

                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Security</th>
                                    <th scope="col">Auction</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            {
                                stocks?.map((elm) => {
                                    return (
                                        <>
                                            <tbody key={elm.stockId}>
                                                <tr>
                                                    <th scope="row">{elm.date}</th>
                                                    <td>{elm.security}</td>
                                                    <td>{elm.action}</td>
                                                    <td>{elm.quantity}</td>
                                                    <td>{elm.price}</td>
                                                    <td>{elm.total}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction