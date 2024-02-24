import React, { useState } from 'react';
import "./LeaveForm.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PrintResetHome from '../../Components/Button/PrintResetHome';
const LeaveForm = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [leaveFrom, setLeaveFrom] = useState('');
    const [leaveTo, setLeaveTo] = useState('');
    const [employeeTitle, setEmployeeTitle] = useState('');
    const [projectName, setProjectName] = useState('');
    const [annualLeave, setAnnualLeave] = useState('');
    const [sickLeave, setSickLeave] = useState('');
    const [otherLeave, setOtherLeave] = useState('');
    const [totalDays, setTotalDays] = useState('');
    const [totalHours, setTotalHours] = useState('');
    const [employee, setEmployee] = useState('');
    // const [supervisorApproval, setSupervisorApproval] = useState('');
    // const [doctorApproval, setDoctorApproval] = useState('');
    return (

        <>
            <div className="container">
                <h1>WASSA Leave Request Form</h1>
                <form >
                    {/* Employee Information Section */}
                    <div className='beside'>
                        <label className="form-label me-4" htmlFor="employeeName">Employee’s Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="employeeName"
                            name="employeeName"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='beside'>
                        <div>
                            <label className="form-label" htmlFor="leaveFrom">Leave requested from:</label>
                            <input
                                className="form-control"
                                type="date"
                                id="leaveFrom"
                                name="leaveFrom"
                                value={leaveFrom}
                                onChange={(e) => setLeaveFrom(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label" htmlFor="leaveTo">Leave requested to:</label>
                            <input
                                className="form-control"
                                type="date"
                                id="leaveTo"
                                name="leaveTo"
                                value={leaveTo}
                                onChange={(e) => setLeaveTo(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className='beside'>
                        <div>
                            <label className="form-label" htmlFor="employeeTitle">Employee’s Title:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="employeeTitle"
                                name="employeeTitle"
                                value={employeeTitle}
                                onChange={(e) => setEmployeeTitle(e.target.value)}
                                required
                            />

                        </div>
                        <div>
                            <label className="form-label" htmlFor="projectName">Project Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="projectName"
                                name="projectName"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Type of Leave Section */}
                    <label className="form-label">Type of Leave:</label>
                    <div className='besidemore'>
                        <div>
                            <input
                                className="form-check-input"
                                type="radio"
                                id="annualLeave"
                                name="leaveType"
                                value={annualLeave}
                                // checked={leaveType === annualLeave}
                                onChange={(e) => setAnnualLeave(e.target.value)}
                                required
                            />
                            <label htmlFor="annualLeave" className='ms-3'>Annual Leave </label>

                        </div>
                        <div>
                            <input
                                className="form-check-input"
                                type="radio"
                                id="sickLeave"
                                name="leaveType"
                                value={sickLeave}
                                // checked={leaveType === sickLeave}
                                // onChange={LeaveTypeHandler}
                                onChange={(e) => setSickLeave(e.target.value)}
                                required
                            />
                            <label htmlFor="sickLeave" className='ms-3'>Sick Leave:</label>

                        </div>
                        <div>
                            <input
                                className="form-check-input"
                                type="radio"
                                id="otherLeave"
                                name="leaveType"
                                placeholder="Other (Explain)"
                                // checked={leaveType === otherLeave}
                                value={otherLeave}
                                // onChange={LeaveTypeHandler}
                                onChange={(e) => setOtherLeave(e.target.value)}
                            />

                            <label htmlFor="otherLeave" className='ms-3'>Other (Explain):</label>
                        </div>
                    </div>
                    <div>


                        <input
                            className="form-control"
                            type="text"
                            id="otherLeave"
                            name="leaveType"
                            placeholder="Other (Explain)"
                            value={otherLeave}
                            onChange={(e) => setOtherLeave(e.target.value)}
                        />

                    </div>
                    {/* Total Days and Hours Section */}
                    <p className='mt-3 fw-bold'>Total Days and Hours: </p>
                    <div className='beside'>
                        <div>
                            <label className="form-label" htmlFor="totalDays">Total days:</label>
                            <input
                                className="form-control"
                                type="number"
                                id="totalDays"
                                name="totalDays"
                                value={totalDays}
                                onChange={(e) => setTotalDays(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label" htmlFor="totalHours">Total hours:</label>
                            <input
                                className="form-control"
                                type="number"
                                id="totalHours"
                                name="totalHours"
                                value={totalHours}
                                onChange={(e) => setTotalHours(e.target.value)}
                            />

                        </div>
                        <div>
                            <label className="form-label" htmlFor="totalDays">From (in hours):</label>
                            <input
                                className="form-control"
                                type="time"
                                id="from"
                                name="from"
                                value={totalDays}
                                onChange={(e) => setTotalDays(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label" htmlFor="to">To (in hours):</label>
                            <input
                                className="form-control"
                                type="time"
                                id="to"
                                name="to"
                                value={totalHours}
                                onChange={(e) => setTotalHours(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="employee">Employee who will cover during your absence:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="employee"
                            name="employee"
                            value={employee}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    {/* Employee’s Signature */}
                    <div className='beside mt-3'>
                        <div>
                            <label className="form-label" htmlFor="employeeSignature">Employee’s Signature:</label>
                            <div style={{ height: "100px", border: "1px solid black" }}></div>

                        </div>
                        <div>
                            <label className="form-label" htmlFor="signatureDate">Date of Signature:</label>
                            <input
                                className="form-control"
                                type="date"
                                id="signatureDate"
                                name="signatureDate"
                                required
                            />
                        </div>
                    </div>
                    {/* HR Section (For Human Resource Use Only) */}
                    <div className='mt-3'>
                        <p className='fw-bold'>DO NOT WRITE BELOW (For Human Resource Use only)</p>
                        <label className="form-label" htmlFor="leaveDaysAvailable">Number of leave days available:</label>
                        <div className='besidemore'>
                            <input
                                className="form-control"
                                type="number"
                                id="leaveDaysAvailable"
                                name="leaveDaysAvailable"
                                // placeholder="Annual"
                                disabled
                            />
                            <input
                                className="form-control"
                                type="number"
                                id="leaveDaysAvailable"
                                name="leaveDaysAvailable"
                                // placeholder="Sick"
                                disabled
                            />
                            <input
                                className="form-control"
                                type="number"
                                id="leaveDaysAvailable"
                                name="leaveDaysAvailable"
                                // placeholder="Other"
                                disabled
                            />
                        </div>

                        <label className="form-label" htmlFor="leaveDaysRemaining">Number of leave days remaining:</label>
                        <div className='besidemore'>

                            <input
                                className="form-control"
                                type="number"
                                id="leaveDaysRemaining"
                                name="leaveDaysRemaining"
                                // placeholder="Annual"
                                disabled
                            />
                            <input
                                className="form-control"
                                type="number"
                                id="leaveDaysRemaining"
                                name="leaveDaysRemaining"
                                // placeholder="Sick"
                                disabled
                            />
                            <input
                                className="form-control"
                                type="number"
                                id="leaveDaysRemaining"
                                name="leaveDaysRemaining"
                                // placeholder="Other"
                                style={{ background: "fff !important", }}

                                disabled
                            />

                        </div>
                        <div className='besidemore my-3 mb-5'>
                            <div>
                                <label className="form-label" htmlFor="preparedByName">Name:</label>
                                <input
                                    placeholder='Enter your name'
                                    className="form-control"
                                    type="text"
                                    id="preparedByName"
                                    name="preparedByName"
                                    required
                                />
                            </div>

                            <div>
                                <label className="form-label " htmlFor="preparedBySignature">Signature:</label>
                                <input type="text " className='form-control sign' />
                            </div>

                            <div>
                                <label className="form-label" htmlFor="preparedByDate">Date:</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="preparedByDate"
                                    name="preparedByDate"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='beside'>
                        {/* Supervisor's Approval/Comments */}
                        <div>
                            <label className="form-label" htmlFor="supervisorApproval">Supervisor's Approval/Comments:</label>
                            <div style={{ width: "200px", height: "200px", border: "1px solid black" }}></div>

                        </div>

                        {/* Doctor's Approval */}
                        <div>
                            <label className="form-label" htmlFor="doctorApproval">Doctor's Approval:</label>
                            <div style={{ width: "200px", height: "200px", border: "0.5px solid black" }}></div>
                        </div>
                    </div>
                    <PrintResetHome />
                </form>
            </div>

        </>
    );
};


export default LeaveForm;