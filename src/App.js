import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeaveForm from "./Pages/LeaveForm/LeaveForm"
import HandoverForm from "./Pages/HandoverForm/HandoverForm"
import Buttons from "./Pages/Buttons/Buttons";
// import "bootstrap/dist/css/bootstrap.min.css"
import CarRequestForm from "./Pages/CarReequestForm/CarRequestForm";
import RequestForm from "./Pages/RequestForm/RequestForm";
import BookRequestForm from "./Pages/BookRequestForm/BookRequestForm"
import ReportingForm from "./Pages/ReportingForm/ReportingForm"
const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Buttons />} />
                    <Route path="/RequestForm" element={<RequestForm />} />
                    <Route path="/LeaveForm" element={<LeaveForm />} />
                    <Route path="/BookRequestForm" element={<BookRequestForm />} />
                    <Route path="/CarRequestForm" element={<CarRequestForm />} />
                    <Route path="/HandoverForm" element={<HandoverForm />} />
                    <Route path="/ReportingForm" element={<ReportingForm />} />
                    <Route path="*" element={<Buttons />} />
                </Routes>
            </Router>


        </div>
    )
}
export default App