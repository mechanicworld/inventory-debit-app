import React, { useState, useEffect } from 'react'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import style from './ItemCard.module.css'

function ItemCard({ adding, setAdding, editing, setEditing, inventoryList, setInventoryList, selectedItem, setSelectedItem }) {


  // Modal version 
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // Modal version end

  useEffect(() => {

    setUpdatedItem(selectedItem)

  }, [selectedItem])

  const [updatedItem, setUpdatedItem] = useState("")
  const [newItem, setNewItem] = useState({})

  const editingHandler = () => {
    setEditing(!editing)
    setUpdatedItem(selectedItem)
  }

  const saveChangesHandler = () => {
    setEditing(!editing)
    const updatedInventoryList =
      inventoryList.map((each) => {
        if (each.id === updatedItem.id) {
          each = updatedItem
        }
        return each
      })
    console.log(updatedInventoryList)
    setInventoryList(updatedInventoryList)

    fetch(`http://localhost:5000/inventories/${updatedItem.id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...updatedItem }),
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

  const addItemHandler = (e) => {
    e.preventDefault()
    if(Object.keys(newItem).length === 11 && Object.values(newItem).every(each => each !== "")){
      fetch(`http://localhost:5000/inventories`, {
      method: 'POST',
      body: JSON.stringify({ ...newItem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then(res => res.json())
      .then(data => {
        setInventoryList([...inventoryList, data])
      })
      setAdding(!adding)
      
      setNewItem({})
    }
    

  }

  const deleteHandler = () => {
    console.log("yes")
    if ( window.confirm(`Delete the Item has Barcode:${selectedItem.barcode}`) ){
      fetch(`http://localhost:5000/inventories/${selectedItem.id}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        res.json()
        console.log(res)
      })
      
      setInventoryList(inventoryList.filter((each) => {
        return each.id !== selectedItem.id
      } ))

      setSelectedItem("")
    }


  }

  return (
    <>
      {
        // Selection is on
        selectedItem ?
          editing ?
            <Row className={`d-flex justify-content-beetween`}>
              <Col className={` col-12 `}>
                <Form>
                  <Form.Row>
                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Barcode</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.barcode}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, barcode: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Serial Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.serialNumber}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, serialNumber: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Bought From</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.boughtFrom}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, boughtFrom: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Invoice Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.invoiceNumber}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, invoiceNumber: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Employee Id</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.invoiceNumber}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, invoiceNumber: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>

                    </Col>

                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Invoice Date</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.invoiceDate}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, invoiceDate: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Guarantee Expired</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.guaranteeExpire}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, guaranteeExpire: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Brand</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.brand}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, brand: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Model</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.model}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, model: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Category</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={updatedItem.category}
                          onChange={(e) => setUpdatedItem({ ...updatedItem, category: e.target.value })}
                          disabled={!editing}
                          required
                        />
                      </Form.Group>
                    </Col >
                    <Col className={` col-4 `} >
                      <Row className={` d-flex justify-content-center`}>
                        <img className={`${style.image} `} src={`/img/not-applicable.png`} alt="" />
                      </Row>
                      <Row>
                        <Form.Group className={`col-12`}>
                          <Form.Label className={` ${style.boldLabel} `} >Information</Form.Label>
                          <Form.Control
                            as='textarea'
                            rows={5}
                            placeholder="Enter ..."
                            value={updatedItem.information}
                            onChange={(e) => setUpdatedItem({ ...updatedItem, information: e.target.value })}
                            disabled={!editing}
                            required
                          />
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
                        >
                          Save Item
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
                        setSelectedItem("")

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
                    <Form.Label className={` ${style.boldLabel} `} >Barcode</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedItem.barcode}
                      value={updatedItem.barcode}
                      onChange={(e) => setUpdatedItem({ ...updatedItem, barcode: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Serial Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedItem.serialNumber}
                      value={updatedItem.serialNumber}
                      onChange={(e) => setUpdatedItem({ ...updatedItem, serialNumber: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Bought From</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedItem.boughtFrom}
                      value={updatedItem.boughtFrom}
                      onChange={(e) => setUpdatedItem({ ...updatedItem, boughtFrom: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Invoice Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedItem.invoiceNumber}
                      value={updatedItem.invoiceNumber}
                      onChange={(e) => setUpdatedItem({ ...updatedItem, invoiceNumber: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Employee Id</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder={selectedItem.invoiceNumber}
                      value={updatedItem.invoiceNumber}
                      onChange={(e) => setUpdatedItem({ ...updatedItem, invoiceNumber: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col className={` col-3 `}>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Invoice Date</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedItem.invoiceDate}
                    value={updatedItem.invoiceDate}
                    onChange={(e) => setUpdatedItem({ ...updatedItem, invoiceDate: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Guarantee Expired</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedItem.guaranteeExpire}
                    value={updatedItem.guaranteeExpire}
                    onChange={(e) => setUpdatedItem({ ...updatedItem, guaranteeExpire: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Brand</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedItem.brand}
                    value={updatedItem.brand}
                    onChange={(e) => setUpdatedItem({ ...updatedItem, brand: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Model</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedItem.model}
                    value={updatedItem.model}
                    onChange={(e) => setUpdatedItem({ ...updatedItem, model: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Category</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={selectedItem.category}
                    value={updatedItem.category}
                    onChange={(e) => setUpdatedItem({ ...updatedItem, category: e.target.value })}
                    disabled={!editing}
                  />
                </Form.Group>

              </Col>
              <Col className={` col-4 `} >
                <Row className={` d-flex justify-content-center`}>
                  <img className={`${style.image} `} src={`/img/note-8.jpg`} alt="" />
                </Row>
                <Row>
                  <Form.Group className={`col-12`}>
                    <Form.Label className={` ${style.boldLabel} `} >Information</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={5}
                      placeholder={selectedItem.information}
                      value={updatedItem.information}
                      onChange={(e) => setUpdatedItem({ ...updatedItem, information: e.target.value })}
                      disabled={!editing}
                    />
                  </Form.Group>
                </Row>
                {!editing ?
                  <Row className={`d-flex justify-content-around mt-1`}>


                  </Row>
                  :
                  <Row className={`d-flex justify-content-around mt-1`}>
                    <Button variant="success" size="lg" className={`col-5`} onClick={saveChangesHandler}>Save Changes</Button>
                    <Button variant="danger" size="lg" className={`col-5`} onClick={editingHandler}>Cancel</Button>
                  </Row>
                }

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
                        <Form.Label className={` ${style.boldLabel} `} >Barcode</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.barcode}
                          onChange={(e) => setNewItem({ ...newItem, barcode: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Serial Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.serialNumber}
                          onChange={(e) => setNewItem({ ...newItem, serialNumber: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Bought From</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.boughtFrom}
                          onChange={(e) => setNewItem({ ...newItem, boughtFrom: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Invoice Number</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.invoiceNumber}
                          onChange={(e) => setNewItem({ ...newItem, invoiceNumber: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Employee Id</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.employeeId}
                          onChange={(e) => setNewItem({ ...newItem, employeeId: e.target.value })}
                          required
                        />
                      </Form.Group>

                    </Col>

                    <Col className={` col-4 `}>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Invoice Date</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.invoiceDate}
                          onChange={(e) => setNewItem({ ...newItem, invoiceDate: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Guarantee Expired</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.guaranteeExpire}
                          onChange={(e) => setNewItem({ ...newItem, guaranteeExpire: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Brand</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.brand}
                          onChange={(e) => setNewItem({ ...newItem, brand: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Model</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.model}
                          onChange={(e) => setNewItem({ ...newItem, model: e.target.value })}
                          required
                        />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label className={` ${style.boldLabel} `} >Category</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder="Enter ..."
                          value={newItem.category}
                          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                          required
                        />
                      </Form.Group>
                    </Col >
                    <Col className={` col-4 `} >
                      <Row className={` d-flex justify-content-center`}>
                        <img className={`${style.image} `} src={`/img/not-applicable.png`} alt="" />
                      </Row>
                      <Row>
                        <Form.Group className={`col-12`}>
                          <Form.Label className={` ${style.boldLabel} `} >Information</Form.Label>
                          <Form.Control
                            as='textarea'
                            rows={5}
                            placeholder="Enter ..."
                            value={newItem.information}
                            onChange={(e) => setNewItem({ ...newItem, information: e.target.value })}
                            required
                          />
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
                        onClick={addItemHandler}
                        disabled={!(Object.keys(newItem).length === 11 && Object.values(newItem).every(each => each !== "")) }
                        >
                          Save Item
                        </Button>
                    </Col>
                    <Col className={`col-4 mt-5`} >
                      <Button
                        size="lg"
                        variant="danger"
                        className={`${style.button} col-10`}
                        onClick={() => {
                          setAdding(!adding)
                          setNewItem({})
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
                    <Button size="lg" className={`${style.buttonNewItem} col-10`} onClick={() => setAdding(!adding)} block>New Item</Button>
                  </Row>
                  
                </Container>
              </Col>
              <Col className={` col-3 `}>
                <Form>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Barcode</Form.Label>
                    <Form.Control type='text' placeholder="Select Item" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Serial Number</Form.Label>
                    <Form.Control type='text' placeholder="Select Item" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Bought From</Form.Label>
                    <Form.Control type='text' placeholder="Select Item" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Invoice Number</Form.Label>
                    <Form.Control type='text' placeholder="Select Item" value="" disabled />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label className={` ${style.boldLabel} `} >Employee Id</Form.Label>
                    <Form.Control type='text' placeholder="Select Item" value="" disabled />
                  </Form.Group>
                </Form>
              </Col>
              <Col className={` col-3 `}>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Invoice Date</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Guarantee Expired</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Brand</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Model</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" value="" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Category</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" value="" disabled />
                </Form.Group>
              </Col >
              <Col className={` col-4 `} >
                <Row className={` d-flex justify-content-center`}>
                  <img className={`${style.image} `} src={`/img/not-applicable.png`} alt="" />
                </Row>
                <Row>
                  <Form.Group className={`col-12`}>
                    <Form.Label className={` ${style.boldLabel} `} >Information</Form.Label>
                    <Form.Control as='textarea' rows={5} value="" placeholder="Select Item" disabled />
                  </Form.Group>
                </Row>

              </Col>
            </Row>







      }
    </>
  )
}

export default ItemCard
