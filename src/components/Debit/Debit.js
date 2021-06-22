import React, { useState } from 'react'
import style from './Debit.module.css'
import { Button, ButtonGroup } from 'react-bootstrap'

function Debit({ debit, index, employeeList, setEmployeeList, selectedEmployee, setSelectedEmployee, inventoryList, setInventoryList }) {

  const { disableButton, setDisableButton } = useState(false)
  const { tempDebit, setTempDebit } = useState({ ...debit })

  const addHandler = () => {

    if (window.confirm(` ${debit.barcode} Barkod numaralı  ${debit.brand} markalı ${debit.model} ${debit.category} demirbaşı ${selectedEmployee.name} adlı çalışana tanımlamayı onaylıyor musunuz ? `)) {



      const updatedInventory = inventoryList.map((each) => {
        if (each.id === debit.id) {
          each.employeeInfo = `${selectedEmployee.identityNumber} - ${selectedEmployee.name}`
        }
        return each
      })

      console.log(updatedInventory)

      setInventoryList([...updatedInventory])

      fetch(`http://localhost:5000/inventories/${debit.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ ...debit }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })

      fetch(`http://localhost:5000/employees/${selectedEmployee.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ ...selectedEmployee, employeeDebit: [...selectedEmployee.employeeDebit, debit] }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          setSelectedEmployee({ ...data })
        })
    }
  }
  const removeHandler = () => {

    if (window.confirm(`  ${debit.barcode} Barkod numaralı  ${debit.brand} markalı ${debit.model} ${debit.category} demirbaşın zimmetini kaldırmayı onaylıyor musunuz?`)) {

      let editingEmployee

      employeeList.forEach((each) => {
        if (each.identityNumber === Number(debit.employeeInfo.slice(0, 11))) {
          editingEmployee = each
        }
      })
      console.log(editingEmployee)

      const updatedInventory = inventoryList.map((each) => {
        if (each.id === debit.id) {
          each.employeeInfo = `Null`
        }
        return each
      })

      console.log(updatedInventory)

      setInventoryList([...updatedInventory])

      fetch(`http://localhost:5000/inventories/${debit.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ ...debit }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })


      const updatedEmployeeDebit = [...editingEmployee.employeeDebit.filter((each) => {
        return each.id !== debit.id
      })]
      console.log(updatedEmployeeDebit)


      fetch(`http://localhost:5000/employees/${editingEmployee.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ ...editingEmployee, employeeDebit: [...updatedEmployeeDebit] }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        }
      )
        .then(res => res.json())
        .then(data => {

          fetch(`http://localhost:5000/employees/${selectedEmployee.id}`)
            .then(res => res.json())
            .then(data => {
              setSelectedEmployee({ ...data })
              fetch('http://localhost:5000/employees')
                .then(res => res.json())
                .then(data => {
                  setEmployeeList(data)
                })
            })
          // while removing this debit selectedEmp should be updated and add conditionals 
        })
    }
  }



  return (
    <>
      <tr className={style.row}   >
        <td>{index + 1}</td>
        <td>{debit.barcode}</td>
        <td>{debit.serialNumber}</td>
        <td>{debit.boughtFrom}</td>
        <td>{debit.invoiceNumber}</td>
        <td>{debit.invoiceDate}</td>
        <td>{debit.guaranteeExpire}</td>
        <td>{debit.brand}</td>
        <td>{debit.model}</td>
        <td>{debit.category}</td>
        <td>{`${debit.information.slice(0, 10)}...`}</td>
        <td>{debit.employeeInfo}</td>
        <td >
          <ButtonGroup className={`d-flex justify-content-around`}>

            <Button disabled={debit.employeeInfo !== "Null"} variant="success" onClick={addHandler} >+</Button>
            <Button disabled={debit.employeeInfo === "Null"} variant="danger" onClick={removeHandler} >-</Button>



          </ButtonGroup>

        </td>
      </tr>

    </>
  )
}

export default Debit
