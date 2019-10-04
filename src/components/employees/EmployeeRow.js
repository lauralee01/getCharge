import React from 'react';
import Trash from '../../images/trash-2.svg'

export default function (props) {
    return (
        <tr className="employee__data" key={props.value.id}>
              
            <td className="employee__detail">{props.value.firstName}</td>
            <td className="employee__detail">{props.value.lastName}</td>
            <td className="employee__detail">{props.value.email}</td>
            <td className="employee__detail">{props.value.phone}</td>
            <td className="employee__detail">{props.value.role}</td>
            <td className="employee__detail">
                <img src={Trash} alt="Trash" />
            </td>
        </tr>
    )
    
}