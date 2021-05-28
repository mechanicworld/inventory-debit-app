import React, { useState, useEffect } from 'react'
import {
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import Employee from '../../components/Employee/Employee'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import style from './Employees.module.css'

function Employees() {

  useEffect(() => {
    fetchEmployee()
  }, [])

  const [employeeList, setEmployeeList] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState("")

  const fetchEmployee = () => {
    fetch("http://localhost:5000/employees")
      .then(response => response.json())
      .then(data => { setEmployeeList(data) })
  }

  return (
    <Container fluid>
      <EmployeeCard employeeList={employeeList} selectedEmployee={selectedEmployee} />
      <Row className={` ${style.table}`}>
        <Table striped bordered hover  >
          <thead>
            <tr>
              <th>#</th>
              <th>Employee</th>
              <th>Identity Number</th>
              <th>Gender</th>
              <th>Title</th>
              <th>Department</th>
              <th>Birthday</th>
              <th>Start Day</th>
              <th>End Day</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((each, index) => {
              return <Employee key={index} employee={each} setSelectedEmployee={setSelectedEmployee} />
            })}

          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Employees
