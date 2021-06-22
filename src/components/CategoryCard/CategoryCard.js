import React, {useState} from 'react'
import {

  Card,
  Button,
  ListGroup,
  InputGroup,
  FormControl,
  Form
} from 'react-bootstrap'

import style from './CategoryCard.module.css'


function CategoryCard({ categoryList, setCategoryList }) {

  const [newCategory, setNewCategory] = useState("")

  const addCategory = (e) => {
    
    e.preventDefault()
    console.log(e.target)
    if(newCategory !== ""){
      console.log("yes")
    }else {
      console.log("Category field is empty")
      alert("Kategori alanını doldurunuz")
    }
    
  }
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Kategori Ekle</Card.Title>
          <ListGroup variant="flush">
            {categoryList.map((each, index) => {
              return <ListGroup.Item key={index}>{each.name} </ListGroup.Item>
            })}
          </ListGroup>
          <Form className={``} >
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Yeni Kategori"
              required={newCategory === ""}
              value={newCategory}
              onChange={(e)=> setNewCategory(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit" onClick={addCategory}>Ekle</Button>
            </InputGroup.Append>
          </InputGroup>
          </Form>
          
        </Card.Body>
      </Card>
    </>
  )
}

export default CategoryCard
