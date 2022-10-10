import React from 'react'
import SideBar from '../DashBoard/Sidebar/SideBar'

const Portfolio = () => {
    return (
        <>
            <div className='d-flex'>
                <SideBar />
                <div className="right_section container">
                    <div className='mt-3'>
                        <table className='table'>
                            <thead className="thead-dark">

                                <tr>
                                    <th scope="col">Tickers</th>
                                    <th scope="col">Shares</th>
                                    <th scope="col">Purchase</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Value</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <th scope="row">AAPL</th>
                                    <td>45</td>
                                    <td>$112</td>
                                    <td>$165</td>
                                    <td>$4981</td>
                                    <td>$7423</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio