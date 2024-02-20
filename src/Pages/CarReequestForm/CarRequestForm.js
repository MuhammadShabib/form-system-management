import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./CarRequestForm.css"
import PrintRestHome from '../../Components/Button/PrintResetHome';
const CarRequestForm = () => {
    const [formData, setFormData] = useState({
        personName: '',
        branchName: '',
        requestDate: '',
        requestTime: '',
        destination: '',
        purpose: '',
    });
    return (
        <div className="car-request-form mt-5 container">
            <div className="header">
                {/* <img src="../../1.jpg" alt="" /> */}
                <h2 className='text-center'>Car Request Form</h2>
            </div>
            <form className='m-4'>
                <div className='beside'>
                    <div className="mb-3 ">
                        <label class="form-label">Name:</label>
                        <input
                            class="form-control"
                            placeholder='Name of Person Requesting Car'
                            type="text"
                            value={formData.personName}
                            onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label class="form-label">Branch Name:</label>
                        <input
                            class="form-control"
                            placeholder='Branch Name'
                            type="text"
                            value={formData.branchName}
                            onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
                        />
                    </div>
                </div>

                <div className='beside'>
                    <div className="mb-3 ">
                        <label class="form-label">Date of Requesting:</label>
                        <input
                            class="form-control"
                            type="date"
                            value={formData.requestDate}
                            onChange={(e) => setFormData({ ...formData, requestDate: e.target.value })}
                        />
                    </div>

                    <div className="mb-3 ">
                        <label class="form-label">Time of Requesting:</label>
                        <input
                            class="form-control"
                            type="time"
                            value={formData.requestTime}
                            onChange={(e) => setFormData({ ...formData, requestTime: e.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 ">
                    <label class="form-label">Destination:</label>
                    <input
                        class="form-control"
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />

                </div>
                <div className="mb-3 ">
                    <label class="form-label">Purpose of Travel:</label>
                    <input
                        class="form-control"
                        type='text'
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    />
                </div>

                <div className='signature mt-5'>
                    <label class="form-label me-3">Supervisor's Signature:</label>
                    <label class="form-label ms-5">Office Approval Signature:</label>

                </div>

                <PrintRestHome />
            </form>
        </div>
    );
};

export default CarRequestForm;
