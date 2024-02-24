import "./Button.css";
import { Link } from "react-router-dom";

const LinkButtons = () => {
    return (
        <>
            <div className="bnts">
                <button className="btn btn-success me-3" onClick={window.print}>
                    Print
                </button>
                <Link
                    className="ms-auto btn btn-outline-primary"

                    onClick={(e) => {
                        const ask = window.confirm("Do you want to go to home page");
                        if (!ask) e.preventDefault();
                    }}
                    to="/" >
                    Back To Home Page
                </Link>
                <button
                    className="btn btn-danger ms-3"
                    onClick={(e) => {
                        const ask = window.confirm("Do you want to reset form")
                        if (ask) document.querySelector("form").reset()
                        else e.preventDefault()

                    }}
                >
                    Reset
                </button>
            </div >
        </>
    );
};

export default LinkButtons;
