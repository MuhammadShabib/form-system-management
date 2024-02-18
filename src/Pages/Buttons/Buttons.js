
import Button from "../../Components/Button/Button";
import * as Icon from 'react-bootstrap-icons';
import "./Buttons.css"


const Buttons = () => {
    // let navigate = useNavigate()
    return (

        <div className="buttons">
            <Button
                icon={<Icon.DoorOpenFill />}
                formName="Leave Form"
                path="/LeaveForm"
            />
            <Button
                icon={<Icon.PersonRaisedHand />}
                formName="Request Form"
                path="/RequestForm"
            />
            <Button
                icon={<Icon.ArrowUp />}
                formName="Handover Form"
                path="/HandoverForm"
            />
            <Button
                icon={<Icon.CarFrontFill />}
                formName="Car request Form"
                path="/CarRequestForm"
            />
            <Button
                icon={<Icon.Book />}
                formName="Book request Form"
                path="/BookRequestForm"
            />
            <Button
                icon={<Icon.PenFill />}
                formName="Reporting Forms"
                path="/ReportingForm"
            />
        </div>

    )
}

export default Buttons;