import React from 'react'
import {
  Container,
  Row
} from 'react-bootstrap'

import style from './Selection.module.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import BrandCard from '../../components/BrandCard/BrandCard'

function Selection({categoryList, setCategoryList, brandList, setBrandList, modelList, setModelList }) {
  return (
    <>
      <Container>
        <Row>
          <CategoryCard 
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          />
          <BrandCard
          brandList={brandList}
          setBrandList={setBrandList}
          categoryList={categoryList}
          />
        </Row>
      </Container>
    </>
  )
}

export default Selection
