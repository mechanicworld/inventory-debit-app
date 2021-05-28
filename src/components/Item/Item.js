import React from 'react'

function Item({item, setSelectedItem}) {
  return (
    <>
      <tr onClick={() => setSelectedItem(item)} >
        <td>{item.id}</td>
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
