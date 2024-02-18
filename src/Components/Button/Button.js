import { Link } from "react-router-dom"
import "./Button.css"
const Button = (props) => {
    const linkStyle = {
        backgroundColor: "#ffffff00",
        color: "#0094f7",
        border: " 1px solid #0094f7",
        borderRadius: "5px",
        textDecoration: "none",
        padding: "10px 20px",
    };
    return (
        <div className="button">
            <span>{props.icon}</span>
            <Link style={linkStyle} to={props.path} >{props.formName}</Link>
        </div >
    )
}
export default Button