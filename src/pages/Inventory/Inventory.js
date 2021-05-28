import React, { useState, useEffect } from 'react'
import {
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import Item from '../../components/Item/Item'
import ItemCard from '../../components/ItemCard/ItemCard'
import style from './Inventory.module.css'

function Inventory() {

  useEffect(() => {
    fetchInventory()
  }, [])

  const [inventoryList, setInventoryList] = useState([])
  const [selectedItem, setSelectedItem] = useState("")

  const fetchInventory = () => {
    fetch("http://localhost:5000/inventoryList")
      .then(response => response.json())
      .then(data => { setInventoryList(data) })
  }

  return (
    <Container fluid>
      <ItemCard inventoryList={inventoryList} selectedItem={selectedItem} />
      <Row className={` ${style.table}`}>
        <Table striped bordered hover  >
          <thead>
            <tr>
              <th>#</th>
              <th>Barcode</th>
              <th>Serial Number</th>
              <th>Bought From</th>
              <th>Invoice Number</th>
              <th>Invoice Date</th>
              <th>Guarantee Expire</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Category</th>
              <th>Information</th>
              <th>Employee Id</th>
            </tr>
          </thead>
          <tbody>
            {inventoryList.map((each, index) => {
              return <Item key={index} item={each} setSelectedItem={setSelectedItem} />
            })}

          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Inventory
