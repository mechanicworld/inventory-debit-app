import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import style from './ItemCard.module.css'

function ItemCard({ inventoryList, selectedItem }) {


  return (
    <>
      {
        selectedItem ?
          <Row className={`d-flex justify-content-beetween`}>
            <Col className={` col-4 `}>
              <Form>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Barcode</Form.Label>
                  <Form.Control type='text' placeholder={selectedItem.barcode} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Serial Number</Form.Label>
                  <Form.Control type='text' placeholder={selectedItem.serialNumber} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Bought From</Form.Label>
                  <Form.Control type='text' placeholder={selectedItem.boughtFrom} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Invoice Number</Form.Label>
                  <Form.Control type='text' placeholder={selectedItem.invoiceNumber} disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Employee Id</Form.Label>
                  <Form.Control type='text' placeholder={selectedItem.employeeId} disabled />
                </Form.Group>
              </Form>
            </Col>
            <Col className={` col-4 `}>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Invoice Date</Form.Label>
                <Form.Control type='text' placeholder={selectedItem.invoiceDate} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Guarantee Expired</Form.Label>
                <Form.Control type='text' placeholder={selectedItem.guaranteeExpire} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Brand</Form.Label>
                <Form.Control type='text' placeholder={selectedItem.brand} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Model</Form.Label>
                <Form.Control type='text' placeholder={selectedItem.model} disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Category</Form.Label>
                <Form.Control type='text' placeholder={selectedItem.category} disabled />
              </Form.Group>
             
            </Col>
            <Col className={` col-4 `} >
              <Row className={` d-flex justify-content-center`}>
                <img className={`${style.image} `} src={`/img/note-8.jpg`} alt="" />
              </Row>
              <Row>
              <Form.Group className={`col-12`}>
                <Form.Label className={` ${style.boldLabel} `} >Information</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder={selectedItem.information}  disabled />
              </Form.Group>
              </Row>
              
            </Col>
          </Row>

          :

          <Row className={`d-flex justify-content-beetween`}>
            <Col className={` col-4 `}>
              <Form>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Barcode</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Serial Number</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Bought From</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Invoice Number</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" disabled />
                </Form.Group>
                <Form.Group >
                  <Form.Label className={` ${style.boldLabel} `} >Employee Id</Form.Label>
                  <Form.Control type='text' placeholder="Select Item" disabled />
                </Form.Group>
              </Form>
            </Col>
            <Col className={` col-4 `}>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Invoice Date</Form.Label>
                <Form.Control type='text' placeholder="Select Item" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Guarantee Expired</Form.Label>
                <Form.Control type='text' placeholder="Select Item" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Brand</Form.Label>
                <Form.Control type='text' placeholder="Select Item" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Model</Form.Label>
                <Form.Control type='text' placeholder="Select Item" disabled />
              </Form.Group>
              <Form.Group >
                <Form.Label className={` ${style.boldLabel} `} >Category</Form.Label>
                <Form.Control type='text' placeholder="Select Item" disabled />
              </Form.Group>
            </Col >
              
            

            <Col className={` col-4 `} >
              <Row className={` d-flex justify-content-center`}>
                <img className={`${style.image} `} src={`/img/not-applicable.png`} alt="" />
              </Row>
              <Row>
              <Form.Group className={`col-12`}>
                <Form.Label className={` ${style.boldLabel} `} >Information</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder="Select Item" disabled />
              </Form.Group>
              </Row>
              
            </Col>
          </Row>
      }
    </>
  )
}

export default ItemCard
