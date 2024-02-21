import React, { useState } from 'react';
import "./TableOfRequest.css"
import "bootstrap/dist/css/bootstrap.min.css"

const RequestTable = () => {
  const [rows, setRows] = useState([
    {
      rowNumber: 1,
      qty: 0,
      description: '',
      estimatedUnit: '',
      estimatedPrice: '',
      estimatedTotal: '',
      actualPrice: '',
      approval: '',
    },
    // Add more initial rows as needed
  ]);

  const addRow = () => {
    const newRowNumber = rows.length + 1;
    setRows([
      ...rows,
      {
        rowNumber: newRowNumber,
        qty: '',
        description: '',
        estimatedUnit: '',
        estimatedPrice: '',
        estimatedTotal: '',
        actualPrice: '',
        approval: '',
      },
    ]);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    // if (index === 0) {
    //   alert("You Can not delete this")
    // }
    newRows.splice(index, 1);

    setRows(newRows);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    // Calculate Estimated Total
    if (field === 'qty' || field === 'estimatedPrice') {
      const qty = parseFloat(updatedRows[index].qty) || 0;
      const price = parseFloat(updatedRows[index].estimatedPrice) || 0;
      updatedRows[index].estimatedTotal = (qty * price).toFixed(2);
    }
    // Calculate Total Estimated Cost for all items
    // const totalEstimatedCost = updatedRows.reduce(
    //   (acc, row) => acc + parseFloat(row.estimatedTotal || 0),
    //   0
    // );
    // updatedRows[updatedRows.length - 1].estimatedTotal = totalEstimatedCost.toFixed(2);
    setRows(updatedRows);
  };

  return (
    <div className=''>
      <table className=' table  mb-4'>
        <thead>
          <tr>
            <th scope="col" style={{ width: "2%" }}>#</th>
            <th scope="col" style={{ width: "5%" }} >QTY</th>
            <th scope="col" style={{ width: "20%" }}>Item Description</th>
            <th scope="col" style={{ width: "5%" }}>Estimated Unit</th>
            <th scope="col" style={{ width: "5%" }}>Estimated Price</th>
            <th scope="col" style={{ width: "6%" }}>Estimated Total</th>
            <th scope="col" style={{ width: "6%" }}>Actual Price</th>
            <th scope="col" style={{ width: "10%" }}>Approval</th>
            <th scope="col" style={{ width: "5%" }} className='delete1'>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.rowNumber}</td>
              <td>
                <input
                  type="number"
                  value={row.qty}
                  onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.description}
                  onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.estimatedUnit}
                  onChange={(e) => handleInputChange(index, 'estimatedUnit', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.estimatedPrice}
                  onChange={(e) => handleInputChange(index, 'estimatedPrice', e.target.value)}
                />
              </td>
              <td>{row.estimatedTotal}</td>


              <td>
                <input
                  type="number"
                  value={row.actualPrice}
                  onChange={(e) => handleInputChange(index, 'actualPrice', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.approval}
                  onChange={(e) => handleInputChange(index, 'approval', e.target.value)}
                />
              </td>
              <td className='delete1'>
                <button className='btn btn-danger' onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {{
            if(row = "0") {

              <tr>
                <td colSpan="5">Total Estimated Cost:</td>
                <td>{rows[rows.length - 1].estimatedTotal}</td>
              </tr>

            }
          }}
        </tfoot> */}
      </table>
      <button className='btn btn-success' onClick={addRow}>Add Row</button>
    </div >
  );
};

export default RequestTable;
