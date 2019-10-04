import React from 'react';
import Sidebar from '../layout/Sidebar';
import EmployeePage from '../employees/Employee'

const Employee = () => {
    return (
        <div>
            <Sidebar />
            <div className="employee">
                <EmployeePage />
            </div>
        </div>
    )
}

export default Employee
