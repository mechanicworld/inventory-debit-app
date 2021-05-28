import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './App.module.css'
import Home from './pages/Home/Home'
import Inventory from './pages/Inventory/Inventory'
import Employees from './pages/Employees/Employees'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
       <div>
        <nav>
          <ul className="row d-flex justify-content-around">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/employees">
            <Employees />
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
