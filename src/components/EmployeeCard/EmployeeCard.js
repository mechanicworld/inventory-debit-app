import React, { useEffect, useState } from 'react'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import style from './EmployeeCard.module.css'

function EmployeeCard({ adding, setAdding, editing, setEditing, selectedEmployee, setSelectedEmployee, employeeList, setEmployeeList }) {

  useEffect(() => {

    setUpdatedEmployee(selectedEmployee)

  }, [selectedEmployee])

  const [updatedEmployee, setUpdatedEmployee] = useState("")
  const [newEmployee, setNewEmployee] = useState({
    "image": "avatar",
    "employeeDebit":[]
  })

  const editingHandler = () => {
    setEditing(!editing)
    setUpdatedEmployee(selectedEmployee)
  }

  const saveChangesHandler = () => {
    setEditing(!editing)
    const updatedEmployeeList =
      employeeList.map((each) => {
        if (each.id === updatedEmployee.id) {
          each = updatedEmployee
        }
        return each
      })
    console.log(updatedEmployeeList)
    setEmployeeList(updatedEmployeeList)

    fetch(`http://localhost:5000/employees/${updatedEmployee.id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...updatedEmployee }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

      })
    // add setUpdateItem("") as async function for clear state
    //
  }

  const addEmployeeHandler = (e) => {
    e.preventDefault()
    if (Object.keys(newEmployee).length === 10 && Object.values(newEmployee).every(each => each !== "")) {
      fetch(`http://localhost:5000/employees`, {
        method: 'POST',
        body: JSON.stringify({ ...newEmployee }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
        .then(res => res.json())
        .then(data => {
          setEmployeeList([...employeeList, data])
        })
      setAdding(!adding)

      setNewEmployee(
        {
          "image": "avatar",
          "employeeDebit":[]
        }
      )
    }


  }

  const deleteHandler = () => {
    console.log("yes")
    if (window.confirm(`Delete the Employee has Name:${selectedEmployee.name}`)) {
      fetch(`http://localhost:5000/employees/${selectedEmployee.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          res.json()
          console.log(res)
        })

      setEmployeeList(employeeList.filter((each) => {
        return each.id !== selectedEmployee.id
      }))

      setSelectedEmployee("")
    }


  }

  return (
    <>
      {
        // Selection is on
        selectedEmployee ?
          editing ?
            <Row className={`d-flex justify-content-beetween`}>
              <Col className={` col-12 `}>
                <Form>
                  <Form.Row>
                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.name}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, name: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Identity Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.identityNumber}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, identityNumber: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Gender</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.gender}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, gender: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Title</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.title}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, title: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Department</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.department}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, department: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Birthday</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.birthday}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, birthday: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Start Day of Employement</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.startDayOfEmployment}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, startDayOfEmployment: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >End Day of Employement</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedEmployee.endDayOfEmployement}
                          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, endDayOfEmployement: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>

                    </Col >
                    <Col className={`col-4`} >
                      <Row className={` d-flex justify-content-center`}>
                        <img className={`${style.image} `} src={`/img/avatar.png`} alt="" />
                      </Row>
                      <Row>
                        <Form.Group className={`col-12`} >
                          <Form.Label>Employee Inventory</Form.Label>
                          <Form.Control as="select" multiple>
                            {selectedEmployee.employeeDebit.map(each => <option>{`Barcode: ${each.barcode} / Category: ${each.category}`}</option>)}
                          </Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                  </Form.Row>
                  <Form.Row className={`justify-content-center`}>
                    <Col className={`col-4 mt-5`} >
                      <Button
                        type="submit"
                        variant="success"
                        className={`${style.button} col-10`}
                        onClick={saveChangesHandler}
                        size="lg"
                        disabled={!(Object.keys(updatedEmployee).length === 11 && Object.values(updatedEmployee).every(each => each !== ""))}
                      >
                        Save Employee
                        </Button>
                    </Col>
                    <Col className={`col-4 mt-5`} >
                      <Button
                        variant="danger"
                        className={`${style.button} col-10`}
                        onClick={() => {
                          setEditing(!editing)
                        }}
                        size="lg"
                      >
                        Cancel
                </Button>
                    </Col>

                  </Form.Row>

                </Form>
              </Col>

            </Row>

            :
            <Row className={`d-flex justify-content-beetween`}>
              <Col className={` col-2 `}>
                <Container className={`${style.buttonContainer} align-items-center`} >
                  <Row className={`${style.buttonSelection}`} >
                    <Button
                      size="lg"
                      onClick={() => {
                        setSelectedEmployee("")
                        fetch('http://localhost:5000/employees')
                          .then(res => res.json())
                          .then(data => {
                            setEmployeeList([...data])
                          })

                      }}
                      block> Clear Selection </Button>
                  </Row>
                  <Row className={`${style.buttonSelection}`} >
                    <Button variant="warning" size="lg" className={``} onClick={editingHandler} block>Edit</Button>
                  </Row>
                  <Row className={`${style.buttonSelection}`} >
                    <Button variant="danger" size="lg" className={``} onClick={deleteHandler} block>Delete</Button>
                  </Row>
                </Container>
              </Col>
              <Col className={` col-3 `}>
                <Form>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedEmployee.name}
                      value={updatedEmployee.name}
                      onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, name: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Identity Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedEmployee.identityNumber}
                      value={updatedEmployee.identityNumber}
                      onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, identityNumber: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Gender</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedEmployee.gender}
                      value={updatedEmployee.gender}
                      onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, gender: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Title</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedEmployee.title}
                      value={updatedEmployee.title}
                      onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, title: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>

                </Form>
              </Col>
              <Col className={` col-3 `}>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Department</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedEmployee.department}
                    value={updatedEmployee.department}
                    onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, department: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Birthday</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedEmployee.birthday}
                    value={updatedEmployee.birthday}
                    onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, birthday: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `}>Start Day of Employement</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedEmployee.startDayOfEmployment}
                    value={updatedEmployee.startDayOfEmployment}
                    onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, startDayOfEmployment: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >End Day of Employement</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedEmployee.endDayOfEmployement}
                    value={updatedEmployee.endDayOfEmployement}
                    onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, endDayOfEmployement: e.target.value })}
                    disabled={!editing}
                  />
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
                      {selectedEmployee.employeeDebit.map(each => <option>{`Barcode: ${each.barcode} / Category: ${each.category}`}</option>)}
                    </Form.Control>
                  </Form.Group>
                </Row>
              </Col>
            </Row>

          :
          // Selection is off
          adding ?
            // Adding is on 
            <Row className={`d-flex justify-content-beetween`}>
              <Col className={` col-12 `}>
                <Form>
                  <Form.Row>
                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.name}
                          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Identity Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.identityNumber}
                          onChange={(e) => setNewEmployee({ ...newEmployee, identityNumber: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Gender</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.gender}
                          onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Title</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.title}
                          onChange={(e) => setNewEmployee({ ...newEmployee, title: e.target.value })}
                          required
                        />
                      </Form.Group>


                    </Col>

                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Department</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.department}
                          onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Birthday</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.birthday}
                          onChange={(e) => setNewEmployee({ ...newEmployee, birthday: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Start Day of Employement</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.startDayOfEmployment}
                          onChange={(e) => setNewEmployee({ ...newEmployee, startDayOfEmployment: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >End Day of Employement</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newEmployee.endDayOfEmployement}
                          onChange={(e) => setNewEmployee({ ...newEmployee, endDayOfEmployement: e.target.value })}
                          required
                        />
                      </Form.Group>

                    </Col >
                    <Col className={`col-4`} >
                      <Row className={` d-flex justify-content-center`}>
                        <img className={`${style.image} `} src={`/img/avatar.png`} alt="" />
                      </Row>
                      <Row>
                        <Form.Group className={`col-12`} >
                          <Form.Label>Employee Inventory</Form.Label>
                          <Form.Control as="select" multiple value={newEmployee.employeeDebit}>
                            <option>Null</option>
                          </Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                  </Form.Row>
                  <Form.Row className={`justify-content-center`}>
                    <Col className={`col-4 mt-5`} >
                      <Button
                        size="lg"
                        type="submit"
                        variant="success"
                        className={`${style.button} col-10`}
                        onClick={addEmployeeHandler}
                        disabled={!(Object.keys(newEmployee).length === 10 && Object.values(newEmployee).every(each => each !== ""))}
                      >
                        Save Employee
                        </Button>
                    </Col>
                    <Col className={`col-4 mt-5`} >
                      <Button
                        size="lg"
                        variant="danger"
                        className={`${style.button} col-10`}
                        onClick={() => {
                          setAdding(!adding)
                          setNewEmployee(
                            {
                              "image": "avatar",
                              "employeeDebit":[]
                            }
                          )
                        }}
                      >
                        Cancel
                    </Button>
                    </Col>

                  </Form.Row>

                </Form>
              </Col>

            </Row>


            :

            <Row className={`d-flex justify-content-beetween`}>
              <Col className={` col-2 `}>
                <Container className={`${style.buttonContainer} align-items-center `} >
                  <Row className={`${style.buttonAdding} justify-content-center`} >
                    <Button size="lg" className={`${style.buttonNewItem} col-10`} onClick={() => setAdding(!adding)} block>New Employee</Button>
                  </Row>

                </Container>
              </Col>
              <Col className={` col-3 `}>
                <Form>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Name</Form.Label>
                    <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Identity Number</Form.Label>
                    <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Gender</Form.Label>
                    <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Title</Form.Label>
                    <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                  </Form.Group>

                </Form>
              </Col>
              <Col className={` col-3 `}>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Department</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Birthday</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Start Day of Employement</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >End Day of Employement</Form.Label>
                  <Form.Control type='text' placeholder="Select Employee" value="" disabled />
                </Form.Group>

              </Col >
              <Col className={` col-4 `} >
                <Row className={` d-flex justify-content-center`}>
                  <img className={`${style.image} `} src={`/img/not-applicable.png`} alt="" />
                </Row>
                <Row>
                  <Form.Group className={`col-12`}>
                    <Form.Label className={` ${style.boldLabel} `} >Inventory List</Form.Label>
                    <Form.Control as='textarea' rows={5} value="" placeholder="Select Employee" disabled />
                  </Form.Group>
                </Row>

              </Col>
            </Row>







      }
    </>
  )
}

export default EmployeeCard
