import { Link } from "react-router-dom"
import "./Button.css"
const Button = (props) => {
    return (
        <div className="button" style={props.style}>
            <span>{props.icon}</span>
            <Link to={props.path} >{props.formName}</Link>
        </div >
    )
}
export default Button