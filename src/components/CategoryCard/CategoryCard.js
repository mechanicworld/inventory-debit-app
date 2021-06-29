import React, { useState } from 'react'
import CategoryRow from './CategoryRow/CategoryRow'
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
    if (newCategory !== "") {
      fetch(`http://localhost:5000/categories`, {
        method: "POST",
        body: JSON.stringify({ "name": newCategory.toUpperCase() }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
        .then(res => res.json())
        .then(data => setCategoryList([...categoryList, data]))
        .then(setCategoryList([]))
        

    } else {
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
              return <CategoryRow categoryList={categoryList} setCategoryList={setCategoryList}  key={index} each={each} />
            })}
          </ListGroup>
          <Form className={``} >
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Yeni Kategori"
                required={newCategory === ""}
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
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
