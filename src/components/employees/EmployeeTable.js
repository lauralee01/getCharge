import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow'

export class EmployeeTable extends Component {
    state = {
        query: "",
        data: [],
        firstPage: 1,
        currentPage: 1,
        usersPerPage: 6,
        loading: false,
        filteredData: [],
        employeeData: [
            {   
                id: '1',
                firstName: "Joshua",
                lastName: "Bakare",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: "Admin"
            },
            {   
                id: '2',
                firstName: "Jane",
                lastName: "Clement",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: "Staff"
            },
            {
                id: '3',
                firstName: "Hannah",
                lastName: "Johnson",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {
                id: '4',
                firstName: "John",
                lastName: "Ngoka",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {
                id: '5',
                firstName: "Omtayo",
                lastName: "Adeleke",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {
                id: '6',
                firstName: "Gloria",
                lastName: "Amadi",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {   
                id: '7',
                firstName: "Joshua",
                lastName: "Bakare",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: "Admin"
            },
            {   
                id: '8',
                firstName: "Jane",
                lastName: "Clement",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: "Staff"
            },
            {
                id: '9',
                firstName: "Hannah",
                lastName: "Johnson",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {
                id: '10',
                firstName: "John",
                lastName: "Ngoka",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {
                id: '11',
                firstName: "Omtayo",
                lastName: "Adeleke",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
            {
                id: '12',
                firstName: "Gloria",
                lastName: "Amadi",
                email: "josh.bakery@gmail.com",
                phone: "+234801345678",
                role: 'Staff'
            },
        ]
    }
    render() {
        const _content = this.state.employeeData
        const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
        const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
        const currentUsers = _content.slice(indexOfFirstUser, indexOfLastUser);

        const employees = currentUsers.map((table) => (
            <EmployeeRow 
                value={table}
                key={table._id}
            />
        ))
        return (
            <div>
                 <table className="employee__table">
                    <thead className="employee__tableheader">
                        <tr className="employee__row">
                            <th className="employee__first">First name</th>
                            <th className="employee__first">Last name</th>
                            <th className="employee__first">Email</th>
                            <th className="employee__first">Phone No</th>
                            <th className="employee__first">Role</th>
                            <th className="employee__first">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable

