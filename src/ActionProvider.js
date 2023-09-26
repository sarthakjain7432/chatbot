import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider=({createChatBotMessage, setState, children})=>{    
  const initialAction=()=>{
    const message = createClientMessage("Got it");
    updateState(message);
  }
  const updateState = (message, checker="") =>{
    setState((prev)=>({
      ...prev,
      messages:[...prev.messages, message],
      checker
    }),);
  }
  const afterGotIt=()=>{
    const message = createClientMessage("Pick a slot ",{
      widget:"slots"
    })
    updateState(message)
  }
  const displayTimings=()=>{
    const message = createChatBotMessage({
      widget:"timings"
    })
    updateState(message)
  }
  const timingMessage=(time)=>{
    const message = createClientMessage(time.date+" "+time.time)
    updateState(message);
    enterName();
  }
  const enterName=()=>{
    const message = createChatBotMessage("Enter your name");
    updateState(message,"age");
  }
  const enterAge = ()=>{
    const message = createChatBotMessage("Enter your age",{
      widget:"askage"
    })
    updateState(message,"exit");
  }
  const exitmsg = ()=>{
    const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit",{
      widget:"exit"
    })
    updateState(message);
  }
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterGotIt,
            displayTimings,
            timingMessage,
            enterName,
            enterAge,
            exitmsg            
          },
        });
      })}
    </div>
  );

}

export default ActionProvider;