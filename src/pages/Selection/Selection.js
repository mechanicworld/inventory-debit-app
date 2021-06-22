import React from 'react'
import {
  Container,
  Row
} from 'react-bootstrap'

import style from './Selection.module.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

function Selection({categoryList, setCategoryList, brandList, setBrandList, modelList, setModelList }) {
  return (
    <>
      <Container>
        <Row>
          <CategoryCard 
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          />
        </Row>
      </Container>
    </>
  )
}

export default Selection
