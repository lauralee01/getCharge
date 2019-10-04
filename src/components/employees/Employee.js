import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';
import { Link } from 'react-router-dom';
import Search from '../../images/search.svg';

class Employee extends Component {
    
    render() {
        return (
            <div className="employee__cover">
                <div className="employee__coverage">
                    <div className="employee__head">Employees</div>
                    <div>
                        <Link to="/newpost" className="employee__header">Add New</Link>
                    </div>
                </div>
                <div className="employee__title">
                    <div className="employee__josh">Josh Bakery Ventures</div>
                    <div className="employee__address">62, Bode Thomas, Surulere, Lagos</div>
                </div>
                <div className="employee__coverage">
                    <div>
                        <select id='employee__select'>
                            <option>Change role</option>
                            <option>Admin</option>
                            <option>Staff</option>
                        </select> 
                        <button className="employee__change">Change</button> 
                        <input type="text" placeholder="Enter staff name here" className='employee__input'/>
                        <img src={Search} alt='Search' className='employee__find' />
                     
                        
                    </div>
                    <div>
                        <Link to="/newpost" className="employee__header">Add New</Link>
                    </div>
                </div>
                <EmployeeTable />
               
            </div>
        )
    }
}

export default withRouter(Employee)
