import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import style from './EmployeeCard.module.css'

function EmployeeCard({ employeeList, selectedEmployee }) {


  return (
    <>
      {
        selectedEmployee ?
          <Row className={`d-flex justify-content-beetween`}>
            <Col className={` col-4 `}>
              <Form>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Name</Form.Label>
                  <Form.Control type='text' placeholder={selectedEmployee.name} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Identity Number</Form.Label>
                  <Form.Control type='text' placeholder={selectedEmployee.identityNumber} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Department</Form.Label>
                  <Form.Control type='text' placeholder={selectedEmployee.department} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Title</Form.Label>
                  <Form.Control type='text' placeholder={selectedEmployee.title} disabled />
                </Form.Group>
              </Form>
            </Col>
            <Col className={` col-4 `}>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Gender</Form.Label>
                <Form.Control type='text' placeholder={selectedEmployee.gender} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Birthday</Form.Label>
                <Form.Control type='text' placeholder={selectedEmployee.birthday} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Start Day of Employment</Form.Label>
                <Form.Control type='text' placeholder={selectedEmployee.startDayOfEmployment} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >End Day of Employment</Form.Label>
                <Form.Control type='text' placeholder={selectedEmployee.endDayOfEmployment} disabled />
              </Form.Group>
            </Col>
            <Col className={`col-4`} >
              <Row className={` d-flex justify-content-center`}>
                <img className={`${style.image} `} src={`/img/avatar.png`} alt="" />
              </Row>
              <Row>
                <Form.Group className={`col-12`} >
                  <Form.Label>Employee Inventory</Form.Label>
                  <Form.Control as="select" multiple>
                    {selectedEmployee.inventoryList.map(each => <option>{`Barcode: ${each.barcode} / Category: ${each.category}`}</option>)}
                  </Form.Control>
                </Form.Group>
              </Row>
            </Col>
          </Row>

          :

          <Row className={`d-flex justify-content-beetween`}>
            <Col className={` col-5 `}>
              <Form>

                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Name</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Identity Number</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Department</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Title</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" disabled />
                </Form.Group>
              </Form>
            </Col>
            <Col className={` col-4 `}>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Gender</Form.Label>
                <Form.Control type='text' placeholder="Select Employee" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Birthday</Form.Label>
                <Form.Control type='text' placeholder="Select Employee" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Start Day of Employment</Form.Label>
                <Form.Control type='text' placeholder="Select Employee" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >End Day of Employment</Form.Label>
                <Form.Control type='text' placeholder="Select Employee" disabled />
              </Form.Group>
            </Col>
            <Col className={` col-3 d-flex justify-content-center align-items-center`} >
              <img className={`${style.image} `} src={`/img/avatar.png`} alt="" />
            </Col>
          </Row>
      }
    </>
  )
}

export default EmployeeCard
