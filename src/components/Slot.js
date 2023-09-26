import React, { useState } from 'react'

const Slot = (props) => {
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [showTiming,setShowTiming] = useState(false);

    const displayTimings=(e)=>{
        setDate(e);
        setShowTiming(true);
    }
    const timingMessage = (time)=>{
        setTime(time);
        props.actions.timingMessage({date,time});
        document.getElementById("time-div").style.display="none";
    }
  return (
    <div id="time-div">
        <div>
            <button id="date1" className="btn" onClick={()=>displayTimings("21 sep, Mon")}>21 sep <br/>Mon</button>
            <button id="date2" className="btn" onClick={()=>displayTimings("22 sep, Tue")}>22 sep <br/>Tue</button>
            <button id="date3" className="btn" onClick={()=>displayTimings("23 sep, Wed")}>23 sep <br/>Wed</button>
        </div>
        {showTiming ?
            <div>
            <div className="time-container">
                <p>Morning</p>
                <button className="btn" onClick={()=>timingMessage("9AM")}>09:00</button>
                <button className="btn" onClick={()=>timingMessage("10AM")}>10:00</button>
                <button className="btn" onClick={()=>timingMessage("11AM")}>11:00</button>
                <button className="btn" onClick={()=>timingMessage("12AM")}>12:00</button>
            </div>
            <div className="time-container">
                <p>Evening</p>
                <button className="btn" onClick={()=>timingMessage("2PM")}>02:00</button>
                <button className="btn" onClick={()=>timingMessage("3PM")}>03:00</button>
                <button className="btn" onClick={()=>timingMessage("4PM")}>04:00</button>
                <button className="btn" onClick={()=>timingMessage("5PM")}>05:00</button>
            </div>
            <div className="time-container">
                <p>Noon</p>
                <button className="btn" onClick={()=>timingMessage("7PM")}>07:00</button>
                <button className="btn" onClick={()=>timingMessage("8PM")}>08:00</button>
                <button className="btn" onClick={()=>timingMessage("9PM")}>09:00</button>
                <button className="btn" onClick={()=>timingMessage("10PM")}>10:00</button>
            </div>
            </div>
            :<></>
        }
    </div>
  )
}

export default Slot