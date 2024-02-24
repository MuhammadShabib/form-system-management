import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../Pages.css"
import LinkButtons from "../../Components/Button/PrintResetHome"
import "./HandoverForm.css"
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
            <div className="container">
                <form >
                    <div>
                        <img src="path-to-logo" alt="WASSA Logo" />
                        <h1>Women Activities and Social Services Association (WASSA)</h1>
                        <h2>Equipment Handover Sheet</h2>
                        <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
                        <div className='beside'>
                            < div>
                                <label>Receiver's Name:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="receiverName"
                                    value={receiverName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Job Title: </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="jobTitle"
                                    value={jobTitle}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>


                        <div className='beside mb-4'>
                            <div>
                                <label>Job Location:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="jobLocation"
                                    value={jobLocation}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Expected Date of Return: </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    name="expectedDateOfReturn"
                                    value={expectedDateOfReturn}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>


                    </div>
                    {/* Table */}
                    <div>
                        <p>request WASSA Office to kindly issue me the following equipment as needed for my official works: </p>
                        <table className='table' border="1">
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
                                        <td><input
                                            className="form-control"
                                            type="text" value={row.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} /></td>
                                        <td><input
                                            className="form-control"
                                            type="text" value={row.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} /></td>
                                        <td><input
                                            className="form-control"
                                            type="text" value={row.srNo} onChange={(e) => handleInputChange(index, 'srNo', e.target.value)} /></td>
                                        <td><input
                                            className="form-control"
                                            type="text" value={row.tag} onChange={(e) => handleInputChange(index, 'tag', e.target.value)} /></td>
                                        <td><input
                                            className="form-control"
                                            type="text" value={row.status} onChange={(e) => handleInputChange(index, 'status', e.target.value)} /></td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => handleDeleteRow(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className='btn btn-success my-4' onClick={handleAddRow}>Add Row</button>
                    </div>
                    {/*  End Of table */}


                    <div>
                        <div className='beside'>
                            <div>
                                <label>Equipment Handover By ICT Dept:</label>
                                <input
                                    className="form-control"
                                    type="text" placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="">Signature:</label>
                                <div style={{ width: "300px", height: "70px", border: "1px solid #000" }} > </div>
                            </div>
                        </div>

                        <hr />

                        <div className='beside'>
                            <div>
                                <label>Approved by:</label>
                                <input
                                    className="form-control"
                                    type="text" placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="">Signature:</label>
                                <div style={{ width: "300px", height: "70px", border: "1px solid #000" }} > </div>

                            </div>
                        </div>


                        <hr />

                        <div className='beside'>
                            <div></div>
                            <div>
                                <label>Signature of Receiver:</label>
                                <div style={{ width: "300px", height: "70px", border: "1px solid #000" }} > </div>

                            </div>
                        </div>
                        <hr />

                        <p className='text-center bg-secondary text-white p-2'>For Office Use Only:</p>
                        <div className='besidemore'>
                            <div>
                                <label>Returned on:</label>
                                <input
                                    className="form-control"
                                    type="date" value={returnedOn} onChange={(e) => setReturnedOn(e.target.value)} />
                            </div>

                            <div>
                                <label>No. of Items returned: </label>
                                <input
                                    className="form-control"
                                    type="number" value={itemsReturned} onChange={(e) => setItemsReturned(e.target.value)} />
                            </div>

                            <div>
                                <label>Status of Item:</label>
                                <input
                                    className="form-control"
                                    type="text" value={statusOfItem} onChange={(e) => setStatusOfItem(e.target.value)} />
                            </div>
                        </div>

                        <div className='beside'>
                            <div>
                                <label> Returned to:</label>
                                <input
                                    className="form-control"
                                    type="text" value={returnedTo} onChange={(e) => setReturnedTo(e.target.value)} />
                            </div>

                            <div>
                                <label> Signature: </label>
                                <div style={{ width: "300px", height: "70px", border: "1px solid #000" }} > </div>
                            </div>
                        </div>


                    </div>
                    <LinkButtons />
                </form>
            </div>


        </>
    );

};

export default HandoverForm;
