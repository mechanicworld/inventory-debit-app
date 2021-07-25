import React from 'react'
import {
  Container,
  Row
} from 'react-bootstrap'

import style from './Selection.module.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import BrandCard from '../../components/BrandCard/BrandCard'
import ModelCard from '../../components/ModelCard/ModelCard'

function Selection({categoryList, setCategoryList, brandList, setBrandList, modelList, setModelList }) {
  return (
    <>
      <Container>
        <Row className={`d-flex justify-content-between`}>
          <CategoryCard 
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          />
          <BrandCard
          brandList={brandList}
          setBrandList={setBrandList}
          categoryList={categoryList}
          />
          <ModelCard
          brandList={brandList}
          categoryList={categoryList}
          modelList={modelList} 
          setModelList={setModelList}

          />
        </Row>
      </Container>
    </>
  )
}

export default Selection
