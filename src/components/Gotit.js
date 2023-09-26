import React, { useEffect, useState } from 'react'

const Gotit = (props) => {
  const [gotItDone, setGotItDone] = useState(false);
  const initialAction =()=>{
    props.actions.initialAction();
    document.getElementById("gotitbtn").style.display = "none";
    setGotItDone(true);
  }
  const afterGotIt=()=>{
    props.actions.afterGotIt();
  }
  useEffect(()=>{
    if(gotItDone===true){
      afterGotIt();}
  },[gotItDone])
  return (
    <div>
        <button id="gotitbtn" className="btn" onClick={()=>initialAction()}>Got it</button>
    </div>
  )
}

export default Gotit