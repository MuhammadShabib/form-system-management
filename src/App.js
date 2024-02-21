import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeaveForm from "./Pages/LeaveForm/LeaveForm"
import HandoverForm from "./Pages/HandoverForm/HandoverForm"
import Buttons from "./Pages/Buttons/Buttons";
import CarRequestForm from "./Pages/CarReequestForm/CarRequestForm";
import RequestForm from "./Pages/RequestForm/RequestForm";
import BookRequestForm from "./Pages/BookRequestForm/BookRequestForm"
import ReportingForm from "./Pages/ReportingForm/ReportingForm"
// import InvoiceTable from "./Components/TableOfRequest/TableOfRequest";
const App = () => {
    return (
        <>
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

        </>

    )
}
export default App