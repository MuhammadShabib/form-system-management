import React, { useState } from 'react';

const HandoverForm = () => {
    const [receiverName, setReceiverName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [expectedDateOfReturn, setExpectedDateOfReturn] = useState('');
    // 
    const [rows, setRows] = useState([
        { sn: 1, name: '', qty: '', srNo: '', tag: '', status: '' }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { sn: rows.length + 1, name: '', qty: '', srNo: '', tag: '', status: '' }]);
    };

    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    // 
    const [returnedOn, setReturnedOn] = useState('');
    const [itemsReturned, setItemsReturned] = useState('');
    const [statusOfItem, setStatusOfItem] = useState('');
    const [returnedTo, setReturnedTo] = useState('');
    const [signature, setSignature] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'receiverName') {
            setReceiverName(value);
        } else if (name === 'jobTitle') {
            setJobTitle(value);
        } else if (name === 'jobLocation') {
            setJobLocation(value);
        } else if (name === 'expectedDateOfReturn') {
            setExpectedDateOfReturn(value);
        }
    };
    return (
        <>
            <div>
                <img src="path-to-logo" alt="WASSA Logo" />
                <h1>Women Activities and Social Services Association (WASSA)</h1>
                <h2>Equipment Handover Sheet</h2>
                <p>Date: {new Date().toLocaleDateString('en-GB')}</p>

                <label>
                    Receiver's Name:
                    <input
                        type="text"
                        name="receiverName"
                        value={receiverName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Job Title:
                    <input
                        type="text"
                        name="jobTitle"
                        value={jobTitle}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Job Location:
                    <input
                        type="text"
                        name="jobLocation"
                        value={jobLocation}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Expected Date of Return:
                    <input
                        type="date"
                        name="expectedDateOfReturn"
                        value={expectedDateOfReturn}
                        onChange={handleChange}
                    />
                </label>
            </div>
            {/* Table */}
            <div>
                <button onClick={handleAddRow}>Add Row</button>
                <table border="1">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name of Item</th>
                            <th>Qty</th>
                            <th>Sr. No</th>
                            <th>Tag#</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.sn}</td>
                                <td><input type="text" value={row.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} /></td>
                                <td><input type="text" value={row.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} /></td>
                                <td><input type="text" value={row.srNo} onChange={(e) => handleInputChange(index, 'srNo', e.target.value)} /></td>
                                <td><input type="text" value={row.tag} onChange={(e) => handleInputChange(index, 'tag', e.target.value)} /></td>
                                <td><input type="text" value={row.status} onChange={(e) => handleInputChange(index, 'status', e.target.value)} /></td>
                                <td>
                                    <button onClick={() => handleDeleteRow(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/*  End Of table */}


            <div>
                <label>
                    Equipment Handover By ICT Dept:
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Signature" />
                </label>
                <hr />

                <label>
                    Approved by:
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Signature" />
                </label>
                <hr />

                <label>
                    Signature of Receiver:
                    <input type="text" />
                </label>
                <hr />

                <p>For Office Use Only:</p>
                <label>
                    Returned on:
                    <input type="date" value={returnedOn} onChange={(e) => setReturnedOn(e.target.value)} />
                </label>
                <label>
                    No. of Items returned:
                    <input type="number" value={itemsReturned} onChange={(e) => setItemsReturned(e.target.value)} />
                </label>
                <label>
                    Status of Item:
                    <input type="text" value={statusOfItem} onChange={(e) => setStatusOfItem(e.target.value)} />
                </label>
                <label>
                    Returned to:
                    <input type="text" value={returnedTo} onChange={(e) => setReturnedTo(e.target.value)} />
                </label>
                <label>
                    Signature:
                    <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} />
                </label>
            </div>
        </>
    );

};

export default HandoverForm;
