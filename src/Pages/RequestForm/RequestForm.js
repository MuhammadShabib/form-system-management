import React, { useState } from "react";
const RequestForm = () => {
    const [dateOfRequest, setDateOfRequest] = useState('');
    const [dateRequired, setDateRequired] = useState('');
    const [projectDepartment, setProjectDepartment] = useState('');
    const [budgetLine, setBudgetLine] = useState('');
    const [location, setLocation] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const handlePaymentChange = (e) => {
        setPaymentType(e.target.value);
    };
    const [requestedBy, setRequestedBy] = useState('');
    const [position1, setPosition1] = useState('');
    const [authorizedBy, setAuthorizedBy] = useState('');
    const [position2, setPosition2] = useState('');
    const [verifiedBy, setVerifiedBy] = useState('');
    const [position3, setPosition3] = useState('');
    const [checkedBy, setCheckedBy] = useState('');
    const [position4, setPosition4] = useState('');
    const [approvedBy, setApprovedBy] = useState('');
    const [position5, setPosition5] = useState('');
    const [dateOfVerifiedBy, setDateOfVerifiedBy] = useState('');
    const [dateOfCheckedBy, setDateOfCheckedBy] = useState('');
    const [dateOfApprovedBy, setDateOfApprovedBy] = useState('');
    return (
        <div className="purchase-form">
            <h1>WASSA Purchase Requisition Form</h1>
            <div>
                <label>Date of Request:</label>
                <input type="date" value={dateOfRequest} onChange={(e) => setDateOfRequest(e.target.value)} />

                <label>Date Required:</label>
                <input type="date" value={dateRequired} onChange={(e) => setDateRequired(e.target.value)} />
            </div>
            <div>
                <label>Project/Department:</label>
                <input type="text" value={projectDepartment} onChange={(e) => setProjectDepartment(e.target.value)} />
                <label>Budget Line:</label>
                <input type="text" value={budgetLine} onChange={(e) => setBudgetLine(e.target.value)} />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <div>
                    <label>Payment Type:</label>
                    <div>
                        <input type="radio" name="payment" value={paymentType} onChange={handlePaymentChange} />
                        <label htmlFor="cheque">Cheque</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" value={paymentType} onChange={handlePaymentChange} />
                        <label htmlFor="cash">Cash</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" value={paymentType} onChange={handlePaymentChange} />
                        <label htmlFor="transfer">Transfer</label>
                    </div>
                </div>
            </div>
            <p>Complete the information and obtain approvals below. Forward the completed and approved form to the Purchasing Department.</p>
            <p>Note: Forms that are not approved or incomplete will be returned to the requisitioner.</p>
            {/* Table */}
            {/* Table End */}
            <p>The above items are required to be used for all classes in all centers</p>
            {/* Third Part */}
            <div>
                <div>
                    <label>
                        Requested by:
                        <input type="text" value={requestedBy} onChange={(e) => setRequestedBy(e.target.value)} />
                    </label>
                    <label>
                        Position:
                        <input type="text" value={position1} onChange={(e) => setPosition1(e.target.value)} />
                    </label>
                    <div>Signature:</div>
                </div>
                <div>
                    <label>
                        Authorized by:
                        <input type="text" value={authorizedBy} onChange={(e) => setAuthorizedBy(e.target.value)} />
                    </label>
                    <label>
                        Position:
                        <input type="text" value={position2} onChange={(e) => setPosition2(e.target.value)} />
                    </label>
                    <div>Signature:</div>
                </div>
            </div>
            <div>
                <div>
                    <label>
                        Verified by (Proc/Log):
                        <input type="text" value={verifiedBy} onChange={(e) => setVerifiedBy(e.target.value)} />
                    </label>
                    <label>
                        Position:
                        <input type="text" value={position3} onChange={(e) => setPosition3(e.target.value)} />
                    </label>
                    <label>Date:</label>
                    <input type="date" value={dateOfVerifiedBy} onChange={(e) => setDateOfVerifiedBy(e.target.value)} />
                </div>
                <div>
                    <label>
                        Checked by (Finance):
                        <input type="text" value={checkedBy} onChange={(e) => setCheckedBy(e.target.value)} />
                    </label>
                    <label>
                        Position:
                        <input type="text" value={position4} onChange={(e) => setPosition4(e.target.value)} />
                    </label>
                    <label>Date:</label>
                    <input type="date" value={dateOfCheckedBy} onChange={(e) => setDateOfCheckedBy(e.target.value)} />
                </div>
                <div>
                    <label>
                        Approved by:
                        <input type="text" value={approvedBy} onChange={(e) => setApprovedBy(e.target.value)} />
                    </label>
                    <label>
                        Position:
                        <input type="text" value={position5} onChange={(e) => setPosition5(e.target.value)} />
                    </label>
                    <label>Date:</label>
                    <input type="date" value={dateOfApprovedBy} onChange={(e) => setDateOfApprovedBy(e.target.value)} />
                </div>
                <div>Signature:</div>
                <div>Signature:</div>
            </div>
        </div>
    );
};

export default RequestForm;