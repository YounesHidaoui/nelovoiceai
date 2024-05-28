"use client";

import { useVapi } from "../../hooks/useVapi";
import { AssistantButton } from "./assistantButton";
import { Display } from "./display";

function Assistant() {
  const { toggleCall, callStatus, audioLevel } = useVapi();
  return (
    <>
     
      <div className="user-input flex flex-col items-center justify-center ">
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={toggleCall}
        ></AssistantButton>
         <div className="chat-history  mt-56">
        <Display />
      </div>
      </div>
    </>
  );
}

export { Assistant };
