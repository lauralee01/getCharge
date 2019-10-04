import React from 'react';
import Home from '../../images/houseicon.svg';
import Users from '../../images/users.svg';
import Cards from '../../images/cards.svg';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__cover">
                <div className="sidebar__container">
                    <div className="sidebar__flex">
                        <img src={Home} alt="House" className="sidebar__image" />
                    </div>
                    <div className="sidebar__flex">
                        <img src={Users} alt="House" className="sidebar__image" />
                    </div>
                    <div className="sidebar__flex">
                        <img src={Cards} alt="House" className="sidebar__image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
