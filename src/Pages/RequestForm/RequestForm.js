import React, { useState } from "react";
import PrintResetHome from "../../Components/Button/PrintResetHome"
import "../Pages.css"
import "./RequestForm.css"
import "bootstrap/dist/css/bootstrap.min.css"
import RequestTable from "../../Components/TableOfRequest/TableOfRequest"
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
    return (
        <div className="container">
            <form>
                <h1>WASSA Purchase Requisition Form</h1>
                <div className="beside">
                    <div>
                        <label className="form-label">Date of Request:</label>
                        <input className="form-control" type="date" id="date1" value={dateOfRequest} onChange={(e) => setDateOfRequest(e.target.value)} />

                    </div>
                    <div>
                        <label className="form-label">Date Required:</label>
                        <input className="form-control" type="date" value={dateRequired} onChange={(e) => setDateRequired(e.target.value)} />
                    </div>
                </div>
                <div className="beside">
                    <div>
                        <label className="form-label">Project/Department:</label>
                        <input className="form-control" type="text" value={projectDepartment} onChange={(e) => setProjectDepartment(e.target.value)} />
                    </div>
                    <div>
                        <label className="form-label">Budget Line:</label>
                        <input className="form-control" type="text" value={budgetLine} onChange={(e) => setBudgetLine(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="beside">
                        <div>
                            <label className="form-label">Location:</label>
                            <input className="form-control" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div className="besidemore mt-4" >
                            <label className="form-label">Payment Type:</label>
                            <div  >
                                <input type="radio" className="form-check-input me-2" name="payment" value={paymentType} onChange={handlePaymentChange} />
                                <label className="form-label" htmlFor="cheque">Cheque</label>
                            </div>
                            <div>
                                <input type="radio" className="form-check-input me-2" name="payment" value={paymentType} onChange={handlePaymentChange} />
                                <label className="form-label" htmlFor="cash">Cash</label>
                            </div>
                            <div>
                                <input type="radio" className="form-check-input me-2" name="payment" value={paymentType} onChange={handlePaymentChange} />
                                <label className="form-label" htmlFor="transfer">Transfer</label>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Complete the information and obtain approvals below. Forward the completed and approved form to the Purchasing Department.</p>
                <p>Note: Forms that are not approved or incomplete will be returned to the requisitioner.</p>
                {/* Table */}

                <RequestTable />
                {/* Table End */}
                <p>The above items are required to be used for all classes in all centers</p>
                {/* Third Part */}
                <div>
                    <div className="besidemore third">
                        <div className="beside">
                            <div>
                                <label className="form-label">
                                    Requested by:
                                </label>
                                <input className="form-control" type="text" value={requestedBy} onChange={(e) => setRequestedBy(e.target.value)} />

                            </div>
                            <div>
                                <label className="form-label">
                                    Position:
                                </label>
                                <input className="form-control" type="text" value={position1} onChange={(e) => setPosition1(e.target.value)} />

                            </div>
                        </div>
                        <div className="mt-5 ">Signature:</div>
                    </div>
                    <div className="besidemore third">
                        <div className="beside">
                            <div>
                                <label className="form-label">
                                    Authorized by:
                                </label>
                                <input className="form-control" type="text" value={authorizedBy} onChange={(e) => setAuthorizedBy(e.target.value)} />
                            </div>
                            <div>
                                <label className="form-label">
                                    Position:
                                </label>
                                <input className="form-control" type="text" value={position2} onChange={(e) => setPosition2(e.target.value)} />
                            </div>
                        </div>
                        <div className="mt-5 ">Signature:</div>
                    </div>
                </div>
                <div className="besidemore ">
                    <div className="on">
                        <div>
                            <label className="form-label">
                                Verified by (Proc/Log): </label>
                            <input className="form-control" type="text" value={verifiedBy} onChange={(e) => setVerifiedBy(e.target.value)} />

                        </div>
                        <div>
                            <label className="form-label">
                                Position:
                            </label>
                            <input className="form-control" type="text" value={position3} onChange={(e) => setPosition3(e.target.value)} />
                        </div>
                        <div>
                            <label className="form-label">Date:</label>

                            <p>{dateOfRequest}</p>
                        </div>
                    </div>
                    <div className="on">
                        <div>
                            <label className="form-label">
                                Checked by (Finance):
                            </label>
                            <input className="form-control" type="text" value={checkedBy} onChange={(e) => setCheckedBy(e.target.value)} />

                        </div>
                        <div>
                            <label className="form-label">
                                Position:
                            </label>
                            <input className="form-control" type="text" value={position4} onChange={(e) => setPosition4(e.target.value)} />

                        </div>
                        <label className="form-label">Date:</label>

                        <p>{dateOfRequest}</p>
                    </div>
                    <div className="on">
                        <div>
                            <label className="form-label">
                                Approved by:
                            </label>
                            <input className="form-control" type="text" value={approvedBy} onChange={(e) => setApprovedBy(e.target.value)} />

                        </div>
                        <div>
                            <label className="form-label">
                                Position:
                            </label>


                            <input className="form-control" type="text" value={position5} onChange={(e) => setPosition5(e.target.value)} />

                        </div>
                        <div>
                            <label className="form-label">Date:</label>

                            <p>{dateOfRequest}</p>
                        </div>
                    </div>

                </div>
                <div className="besidemore sign1">
                    <div>
                        <div></div>
                    </div>
                    <div className="beside sign2 mt-3">
                        <div>Signature:</div>
                        <div>Signature:</div>
                    </div>
                </div>
                <PrintResetHome />
            </form>

        </div>
    );
};

export default RequestForm;