import { useState } from "react";
import LinkButtons from "../../Components/Button/PrintResetHome"
import "bootstrap/dist/css/bootstrap.min.css"
import "../Pages.css"
import "./BookRequestForm.css"
const BookRequestForm = () => {

    const [receiverName, setReceiverName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [receivingDate, setReceivingDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const [giverName, setGiverName] = useState('');

    return (
        <div className="container">
            <div className="beside " style={{ alignItems: "center", gap: "120px" }}>
                <img src="./1.jpg" alt="logo" />
                <h2>Book Request Form</h2>
            </div>
            <form >
                <div className="beside">
                    <div>
                        <label htmlFor="receiverName">Name of Receiver:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="receiverName"
                            value={receiverName}
                            onChange={(e) => setReceiverName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">Phone Number of Receiver:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>

                </div>
                <div className="beside">
                    <div>
                        <label htmlFor="bookTitle">Name of Book:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="bookTitle"
                            value={bookTitle}
                            onChange={(e) => setBookTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="authorName">Name of Author:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="authorName"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="beside">
                    <div>
                        <label htmlFor="receivingDate">Date of Receiving:</label>
                        <input
                            className="form-control"
                            type="date"
                            id="receivingDate"
                            value={receivingDate}
                            onChange={(e) => setReceivingDate(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="returnDate">Date of Return:</label>
                        <input
                            className="form-control"
                            type="date"
                            id="returnDate"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="beside">
                    <label htmlFor="giverName">Name of Person Giving the Book:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="giverName"
                        value={giverName}
                        onChange={(e) => setGiverName(e.target.value)}
                        required
                    />
                </div>
                <div className="beside">
                    <div>
                        <label htmlFor="receiverSignature">Receiver's Signature:</label>
                        <div style={{ width: "300px", height: "70px", border: "1px solid #000" }} > </div>
                    </div>
                    <div>
                        <label htmlFor="giverSignature">Giver's Signature:</label>
                        <div style={{ width: "300px", height: "70px", border: "1px solid #000" }} > </div>

                    </div>
                </div>

                <LinkButtons />

            </form>
        </div>
    );
}

export default BookRequestForm;