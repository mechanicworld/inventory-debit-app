import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './App.module.css'
import Home from './pages/Home/Home'
import Inventory from './pages/Inventory/Inventory'
import Employees from './pages/Employees/Employees'
import Selection from './pages/Selection/Selection'
import { Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  useEffect(() => {
    fetchEmployee()
    fetchInventory()
    fetchCategories()
    fetchBrands()
    fetchModels()
  }, [])

  

  const [employeeList, setEmployeeList] = useState([])
  const [inventoryList, setInventoryList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [modelList, setModelList] = useState([])

  

  const fetchEmployee = () => {
    fetch("http://localhost:5000/employees")
      .then(response => response.json())
      .then(data => { setEmployeeList(data) })
  }
  const fetchInventory = () => {
    fetch("http://localhost:5000/inventories")
      .then(response => response.json())
      .then(data => { setInventoryList(data) })
  }
  const fetchCategories = () => {
    fetch("http://localhost:5000/categories")
      .then(response => response.json())
      .then(data => { setCategoryList(data) })
  }
  const fetchBrands = () => {
    fetch("http://localhost:5000/brands")
      .then(response => response.json())
      .then(data => { setBrandList(data) })
  }
  const fetchModels = () => {
    fetch("http://localhost:5000/models")
      .then(response => response.json())
      .then(data => { setModelList(data) })
  }

  return (
    <Router>
      <div>
        <nav className="mb-5">
          <ul className="row d-flex justify-content-around">
            <li className="col-3">
              <Link className={style.navlink} to="/">Home</Link>
            </li >
            <li className="col-3">
              <Link className={style.navlink} to="/employees">Employees</Link>
            </li>
            <li className="col-3">
              <Link className={style.navlink} to="/inventory">Inventory</Link>
            </li>
            <li className="col-3">
              <Link className={style.navlink} to="/selection">Seçenek Ekle</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/selection">
            <Selection
              categoryList={categoryList}
              setCategoryList={setCategoryList}
              brandList={brandList}
              setBrandList={setBrandList}
              modelList={modelList}
              setModelList={setModelList}

            />
          </Route>
          <Route exact path="/inventory">
            <Inventory 
              employeeList={employeeList} 
              setEmployeeList={setEmployeeList} 
              inventoryList={inventoryList} 
              setInventoryList={setInventoryList}
            />
          </Route>
          <Route exact path="/inventory/:slug">
            <Inventory  
              employeeList={employeeList} 
              setEmployeeList={setEmployeeList} 
              inventoryList={inventoryList} 
              setInventoryList={setInventoryList}
           />
          </Route>
          <Route path="/employees">
            <Employees  
              
              employeeList={employeeList} 
              setEmployeeList={setEmployeeList} 
              inventoryList={inventoryList} 
              setInventoryList={setInventoryList}
              />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
