import React, { useState } from 'react'
import {
  Card,
  Button,
  ListGroup,
  InputGroup,
  Form
} from 'react-bootstrap'

import style from './BrandCard.module.css'
import BrandRow from './BrandRow/BrandRow'

function BrandCard({ brandList, setBrandList, categoryList }) {



  const [newBrand, setNewBrand] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  
  const addBrand = (e) => {
    e.preventDefault()
    console.log(e.target)
    if (newBrand !== "" && selectedCategory !== "") {
      fetch(`http://localhost:5000/brands`, {
        method: "POST",
        body: JSON.stringify({ "name": newBrand.toUpperCase(), "category": selectedCategory }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
        .then(res => res.json())
        .then(data => setBrandList([...brandList, data]))
        .then(setBrandList([]))
        .then(setSelectedCategory(""))
        .then(setNewBrand(""))

    } else {
      console.log("Category/Brand field is empty")
      console.log(categoryList)
      alert("Kategori / Brand alanları bos bırakılamaz")
    }
  }

  return (
    <>
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>Marka Ekle</Card.Title>
          {categoryList.map((categoryItem,index)=> {
            return <ListGroup variant="flush">
              <p className="text-black-50">{categoryItem.name}</p>
            {brandList.filter(brand => brand.category === categoryItem.name).map((each, index) => {
              return <BrandRow brandList={brandList} setBrandList={setBrandList} key={index} each={each} />
            })}
          </ListGroup>
          })}
          
          <Form className={``} >

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Kategori Seçin</Form.Label>
              <Form.Control as="select" required onChange={(e) => setSelectedCategory(e.target.value)} >
                <option selected >Kategori...</option>
                {categoryList.map((each, index )=> {
                  return <option key={index}> {each.name}</option>
                })}
                
              </Form.Control>
            </Form.Group>
            <InputGroup className="mb-3">

              <Form.Control
                placeholder="Yeni Marka"
                required={newBrand === ""}
                value={newBrand}
                onChange={(e) => setNewBrand(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit" onClick={addBrand}>Ekle</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>

        </Card.Body>
      </Card>
    </>
  )
}

export default BrandCard
