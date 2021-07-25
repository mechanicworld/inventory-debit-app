import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

function ModelCardRow({ each, modelList, setModelList }) {

  const deleteBrand = (e) => {
    e.preventDefault()
    console.log(each.id)

    fetch(`http://localhost:5000/models/${each.id}`,
      {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res => res.json())
      .then(data => {
        fetch(`http://localhost:5000/models`)
          .then(res => res.json())
          .then(data => setModelList(data))
      })
  }
  return (
    <>
    <ListGroup.Item className={`row d-flex align-items-center`}>
      <p className={`col-10 center `}>
        {` ${each.name} `}
      </p>
      
      <Button variant="outline-danger" size="sm" className={`col-2`} onClick={deleteBrand} >X</Button>
    </ListGroup.Item>
  </>
  )
}

export default ModelCardRow
