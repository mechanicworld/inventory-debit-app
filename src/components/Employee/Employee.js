import React from 'react'

function Employee({employee, setSelectedEmployee}) {
  return (
    <>
      <tr onClick={() => setSelectedEmployee(employee)} >
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.identityNumber}</td>
        <td>{employee.gender}</td>
        <td>{employee.title}</td>
        <td>{employee.department}</td>
        <td>{employee.birthday}</td>
        <td>{employee.startDayOfEmployment}</td>
        <td>{employee.endDayOfEmployement}</td>
      </tr>
    </>
  )
}

export default Employee
