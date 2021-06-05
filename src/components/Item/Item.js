import React from 'react'
import style from './Item.module.css'

function Item({item, setSelectedItem, index}) {
  return (
    <>
      <tr className={ style.row }  onClick={() => setSelectedItem(item)} >
        <td>{index + 1}</td>
        <td>{item.barcode}</td>
        <td>{item.serialNumber}</td>
        <td>{item.boughtFrom}</td>
        <td>{item.invoiceNumber}</td>
        <td>{item.invoiceDate}</td>
        <td>{item.guaranteeExpire}</td>
        <td>{item.brand}</td>
        <td>{item.model}</td>
        <td>{item.category}</td>
        <td>{`${item.information.slice(0,10)}...`}</td>
        <td>{item.employeeId}</td>
      </tr>
    </>
  )
}

export default Item
