import "./Button.css"
import { Link } from "react-router-dom"

const LinkButtons = () => {
    return (
        <div className="bnts">
            <button className='btn btn-primary me-3' onClick={window.print}> Print</button>
            <Link className='ms-auto btn btn-outline-primary' to="/">Back To Home Page</Link>
            <input type="reset" className='btn btn-primary ms-3' value=" Reset" />
        </div>
    )
}
export default LinkButtons