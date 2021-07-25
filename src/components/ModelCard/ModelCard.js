import React, { useState } from 'react'
import {
  Card,
  Button,
  ListGroup,
  InputGroup,
  Form
} from 'react-bootstrap'
import ModelCardRow from './ModelCardRow/ModelCardRow'


function ModelCard({ brandList, categoryList, modelList, setModelList }) {

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [newModel, setNewModel] = useState("")

  const addBrand = (e) => {
    e.preventDefault()
    console.log(e.target)
    if (newModel !== "" && selectedCategory !== "" && selectedBrand !== "") {
      fetch(`http://localhost:5000/models`, {
        method: "POST",
        body: JSON.stringify(
          {
            "name": newModel.toUpperCase(),
            "category": selectedCategory,
            "brand": selectedBrand
          }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
        .then(res => res.json())
        .then(data => setModelList([...modelList, data]))
        .then(setModelList([]))
        .then(setSelectedCategory(""))
        .then(setSelectedBrand(""))
        .then(setNewModel(""))

    } else {
      console.log("Category/Brand field is empty")
      console.log(categoryList)
      alert("Kategori / Marka / Model alanları bos bırakılamaz")
    }
  }

  return (


    <>
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>Model Ekle</Card.Title>

          {brandList.map((brandItem, index) => {
            return <ListGroup variant="flush">
              <p className="text-black-50">{brandItem.name}</p>
              {modelList.filter(model => model.brand === brandItem.name).map((each, index) => {
                return <ModelCardRow modelList={modelList} setModelList={setModelList} key={index} each={each} />
              })}
            </ListGroup>

          })}

          <Form className={``} >

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Kategori Seçin</Form.Label>
              <Form.Control as="select" required onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                <option >Kategori...</option>
                {categoryList.map((each, index) => {
                  return <option key={index}> {each.name}</option>
                })}

              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Marka Seçin</Form.Label>
              <Form.Control
                disabled={selectedCategory === ""}
                as="select" required
                onChange={(e) => setSelectedBrand(e.target.value)}
                value={selectedBrand}
              >
                <option selected >Marka...</option>
                { brandList.map((each, index) => {
                  if (each.category === selectedCategory) {
                    return <option key={index}> {each.name}</option>
                  }
                })}

              </Form.Control>
            </Form.Group>
            <InputGroup className="mb-3">

              <Form.Control
                placeholder="Yeni Model"
                required={newModel === ""}
                value={newModel}
                onChange={(e) => setNewModel(e.target.value)}
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

export default ModelCard
