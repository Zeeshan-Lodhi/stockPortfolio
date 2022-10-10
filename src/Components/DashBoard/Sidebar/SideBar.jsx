import './sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import React from 'react';
const SideBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="dashboard d-flex">
                <nav className="left_side_nav" data-expanded="true">
                    <div className="nav__main">
                        <h4 className='mb-4 mt-4 text-center' style={{ color: "#0da18e" }}>AMS</h4>
                        <ul className="nav__items">
                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to='/'>
                                    <i className="fa-solid fa-gauge"></i>
                                    <span className="nav__item-text">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to="/transaction">
                                    <i class="fa-solid fa-tent-arrow-left-right"></i>
                                    <span className="nav__item-text" onClick={() => { navigate("/transaction") }}>Transaction</span>
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__item-box" title="Dashboard" to="/position">
                                    <i class="fa-solid fa-sack-dollar"></i>
                                    <span className="nav__item-text" >Position</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default React.memo(SideBar)