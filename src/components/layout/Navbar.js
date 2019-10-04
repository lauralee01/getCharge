import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import Arrow from '../../images/downarr.svg';
import Logo from '../../images/getlogo.svg'

class Navbar extends Component {
    
    render () {
        return (
            <nav className="navbar__cover">
                <div className="navbar__iconmain">
                    <img src={this.props.icon} alt="Logo" className="navbar__icon" />
                </div> 
                <ul className="navbar__list">
                    <li className="navbar__link">
                        <Link to="/" className="navbar__text">{this.props.user}</Link>
                        <img src={this.props.arrow} alt="Arrow" className="navbar__arrow" />
                    </li>
                </ul>
            </nav>
        )
    }
    
}
Navbar.defaultProps = {
    user: "Hi, Joshua",
    icon: Logo,
    arrow: Arrow
}

export default withRouter(Navbar)
