import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const DataDisplay = ()=>{
    const navigate = useNavigate();
    const {name,age} = useSelector((store)=>store.data);
    const goToHome=()=>{
        navigate('/');
    }
    return(
        <div className="info">
            <h3>Your name <span className="data">{name}</span> aged <span className="data">{age}</span> has been added to student system. You may now exit.</h3>
            <button className="btn exit-btn" onClick={()=>goToHome()}>Exit</button>
        </div>
    )
}
export default DataDisplay;