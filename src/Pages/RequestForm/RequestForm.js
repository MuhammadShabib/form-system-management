import React, { useState } from "react";
const RequestForm = () => {

    const [formData, setFormData] = useState({
        dateOfRequest: '',
        projectDepartment: '',
        dateRequired: '',
        budgetLine: '',
        paymentType: '',
        location: '',
        itemDetails: [],
        totalCost: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h1>Purchase Requisition Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Input fields */}
                <input
                    type="text"
                    name="dateOfRequest"
                    placeholder="Date of Request"
                    value={formData.dateOfRequest}
                    onChange={handleInputChange}
                />
                {/* Add other input fields (projectDepartment, dateRequired, etc.) */}
                {/* Item details table */}
                <table>
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Estimated Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through itemDetails and render rows */}
                        {/* Example row: */}
                        <tr>
                            <td>Power Extension</td>
                            <td>10</td>
                            <td>NO</td>
                            <td>350</td>
                        </tr>
                        {/* Add more rows dynamically */}
                    </tbody>
                </table>
                {/* Total cost */}
                <p>Total Cost: {formData.totalCost}</p>
                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );

    // return (
    //     <React.Fragment>
    //         <form action="#">
    //             <div className="head">
    //                 <div className="head-content">
    //                     <h2>Women's Activities and Social Services Association (WASSA) </h2>
    //                     <h1>Purchase Requisition Form</h1>
    //                 </div>
    //             </div>


    //             {/* <button onClick={window.print}>print</button> */}
    //         </form>

    //     </React.Fragment>

    // )
}

export default RequestForm;