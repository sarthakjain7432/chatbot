import {useNavigate} from "react-router-dom";

const EnrolNow=()=>{
    const navigate = useNavigate();

    const showChatBot=()=>{
        navigate('/chat');
    }
    return(
        <div>
            <h3>Enter into student info system</h3>
            <button className="btn" onClick={()=>showChatBot()}>Enrol Now</button>
        </div>
    )
}
export default EnrolNow;