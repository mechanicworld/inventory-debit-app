import React, { useState, useEffect } from 'react'
import {
  Table,
  Container,
  Row,
  
} from 'react-bootstrap'
import { useParams } from 'react-router'
import Item from '../../components/Item/Item'
import ItemCard from '../../components/ItemCard/ItemCard'
import style from './Inventory.module.css'

function Inventory({ employeeList, setEmployeeList} ) {

  useEffect(() => {
    fetchInventory()
  }, [])

 

  const {slug} = useParams()
  
  const [inventoryList, setInventoryList] = useState([])
  const [selectedItem, setSelectedItem] = useState("")
  const [editing, setEditing] = useState(false)
  const [adding, setAdding] = useState(false)

 


  const fetchInventory = () => {
    fetch("http://localhost:5000/inventories")
      .then(response => response.json())
      .then(data => { setInventoryList(data) })
      console.log(slug)
  }
 

  return (
    <Container fluid>
      <ItemCard
        adding={adding}
        setAdding={setAdding}
        editing={editing}
        setEditing={setEditing}
        setInventoryList={setInventoryList}
        inventoryList={inventoryList}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem} />
      <Row className={` ${style.table}`}>
        {editing || adding ? <h2>Editing...</h2> :
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
                return <Item key={index} index={index} item={each} setSelectedItem={setSelectedItem} />
              })}

            </tbody>
          </Table>
        }

      </Row>
    </Container>
  )
}

export default Inventory
